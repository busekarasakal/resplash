import * as React from 'react';
import { Stack, useTheme } from '@mui/material';
import { ImageMasonry } from './ImageMasonry';
import { Header } from './Header';
import { SubHeader } from './SubHeader';
import { Layout } from './Layout';

export default function App() {
  const theme = useTheme();

  return (
    <Layout>
      <Header />
      {/*Body*/}
      <Stack
        sx={{
          height: '100%',
          marginTop: theme.spacing(3),
          padding: theme.spacing(3),
          backgroundColor: theme.palette.common.white,
        }}
        gap={4}
      >
        <SubHeader />
        <Stack alignItems='center'>
          <ImageMasonry />
        </Stack>
      </Stack>
    </Layout>
  );
}
