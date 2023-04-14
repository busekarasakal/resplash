import * as React from 'react';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDeviceSize } from '../../hooks/useDeviceSize';
import { PropsWithChildren } from 'react';

export function SubHeader(props: PropsWithChildren<{ title: string }>) {
  const { isLargeScreenDevice } = useDeviceSize();

  return (
    <Stack
      direction={isLargeScreenDevice ? 'row' : 'column'}
      alignItems='center'
      gap={1}
    >
      <Box width='100%'>
        <Typography
          variant='h4'
          fontWeight='bold'
          textAlign={isLargeScreenDevice ? 'left' : 'center'}
          noWrap
        >
          {props.title}
        </Typography>
      </Box>
      {props.children}
    </Stack>
  );
}
