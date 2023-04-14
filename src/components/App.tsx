import * as React from 'react';
import { ImageMasonry } from './ImageMasonry';
import { Header } from './Header';
import { SubHeader } from './SubHeader';
import { Layout } from './Layout';
import { Body } from './Body';
import { useGetImages } from '../hooks/useGetImages';
import { ApiImage } from '../shared/types';
import { useInView } from 'react-intersection-observer';
import { useMemo } from 'react';
import Box from '@mui/material/Box';

export default function App() {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetImages(
    { search: 'dog' },
  );
  const images = useMemo(() => {
    return data?.pages.reduce<ApiImage[]>(
      (acc, page) => [...acc, ...page.results],
      [],
    );
  }, [data]);

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Layout>
      <Header />
      <Body>
        <SubHeader />
        <Box
          alignItems='center'
          sx={{
            overflowAnchor: 'none',
          }}
        >
          {data ? <ImageMasonry imageList={images ?? []} /> : null}
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
