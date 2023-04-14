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
import { useSearchParams } from 'react-router-dom';
import { getValidatedParam } from '../shared/validators';
import {
  COLOR_OPTIONS,
  ORIENTATION_OPTIONS,
  SORT_OPTIONS,
} from '../shared/constants';

export default function App() {
  const { ref, inView } = useInView();
  const [params] = useSearchParams();

  const [search, setSearch] = useState(params.get('search') ?? '');
  const [orientation, setOrientation] = useState(
    getValidatedParam(params.get('orientation'), ORIENTATION_OPTIONS),
  );
  const [color, setColor] = useState(
    getValidatedParam(params.get('color'), COLOR_OPTIONS),
  );
  const [sort, setSort] = useState(
    getValidatedParam(params.get('sort'), SORT_OPTIONS),
  );
  const debouncedSearch = useDebounce(search, 500);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetImages(
    { search: debouncedSearch, orientation, color, sort },
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
            {isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
              ? 'Load Newer'
              : 'Nothing more to load'}
          </Box>
        </Box>
      </Body>
    </Layout>
  );
}
