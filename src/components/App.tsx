import React, { useEffect, useMemo, useState } from 'react';
import { ImageMasonry } from './ImageMasonry';
import { Header } from './Header';
import { SubHeader } from './SubHeader';
import { Layout } from './Layout';
import { Body } from './Body';
import { useGetImages } from '../hooks/useGetImages';
import { ApiImage } from '../shared/types';
import { useInView } from 'react-intersection-observer';
import Box from '@mui/material/Box';
import { SearchBar } from './SearchBar';
import { useDebounce } from '../hooks/useDebounce';
import { SearchMenuGroup } from './SearchMenuGroup';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  buildGetImagesUrlReplacement,
  getSanitizedParam,
} from '../shared/helpers';
import {
  COLOR_OPTIONS,
  ORIENTATION_OPTIONS,
  SORT_OPTIONS,
} from '../shared/constants';
import Typography from '@mui/material/Typography';

export default function App() {
  const { ref, inView } = useInView();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const [search, setSearch] = useState(params.get('search') ?? '');
  const debouncedSearch = useDebounce(search, 500);

  const [orientation, setOrientation] = useState(
    getSanitizedParam(params.get('orientation'), ORIENTATION_OPTIONS),
  );
  const [color, setColor] = useState(
    getSanitizedParam(params.get('color'), COLOR_OPTIONS),
  );
  const [sort, setSort] = useState(
    getSanitizedParam(params.get('sort'), SORT_OPTIONS),
  );

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetImages(
    { search: debouncedSearch, orientation, color, sort },
    {
      onSettled: () => {
        const inputIsPristine =
          search === '' &&
          orientation === ORIENTATION_OPTIONS[0].value &&
          color === COLOR_OPTIONS[0].value &&
          sort === SORT_OPTIONS[0].value;

        if (!inputIsPristine) {
          const newRouteUrl = buildGetImagesUrlReplacement({
            search: debouncedSearch,
            orientation,
            color,
            sort,
          });

          navigate(`/?${newRouteUrl}`, {
            replace: true,
          });
        }
      },
    },
  );
  const images = useMemo(() => {
    return (
      data?.pages.reduce<ApiImage[]>((acc, page) => {
        if (page.results !== undefined) {
          acc.push(...page.results);
        }

        return acc;
      }, []) ?? []
    );
  }, [data]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Layout>
      <Header>
        <SearchBar
          value={search}
          onChange={onSearchChange}
          onClear={() => setSearch('')}
        />
      </Header>
      <Body>
        <SubHeader title={debouncedSearch}>
          <SearchMenuGroup
            orientation={orientation}
            onOrientationChange={(value) => setOrientation(value)}
            color={color}
            onColorChange={(value) => setColor(value)}
            sort={sort}
            onSortChange={(value) => setSort(value)}
          />
        </SubHeader>
        <Box
          alignItems='center'
          sx={{
            overflowAnchor: 'none',
          }}
        >
          {images.length !== 0 ? (
            <ImageMasonry imageList={images ?? []} />
          ) : null}
          <Box
            ref={ref}
            height={30}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Typography>
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                ? 'Load Newer'
                : 'Nothing more to load'}
            </Typography>
          </Box>
        </Box>
      </Body>
    </Layout>
  );
}
