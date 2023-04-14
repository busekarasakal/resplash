import * as React from 'react';
import { Stack } from '@mui/material';
import { ImageMasonry } from './ImageMasonry';
import { Header } from './Header';
import { SubHeader } from './SubHeader';
import { Layout } from './Layout';
import { Body } from './Body';

export default function App() {
  return (
    <Layout>
      <Header />
      <Body>
        <SubHeader />
        <Stack alignItems='center'>
          <ImageMasonry />
        </Stack>
      </Body>
    </Layout>
  );
}
