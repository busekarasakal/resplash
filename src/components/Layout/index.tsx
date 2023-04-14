import React from 'react';
import Box from '@mui/material/Box';

export function Layout(props: React.PropsWithChildren<unknown>) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {props.children}
    </Box>
  );
}
