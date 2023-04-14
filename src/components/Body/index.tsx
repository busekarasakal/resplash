import React from 'react';
import { Stack, useTheme } from '@mui/material';

export function Body(props: React.PropsWithChildren<unknown>) {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        height: '100%',
        marginTop: theme.spacing(3),
        padding: theme.spacing(3),
        backgroundColor: theme.palette.common.white,
      }}
      gap={4}
    >
      {props.children}
    </Stack>
  );
}
