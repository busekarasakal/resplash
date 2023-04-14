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
      justifyContent='space-between'
      gap={1}
    >
      <Box
        overflow={'hidden'}
        flex={1}
        maxWidth={isLargeScreenDevice ? '40%' : '100%'}
      >
        <Typography
          variant='h4'
          fontWeight='bold'
          textAlign={isLargeScreenDevice ? 'left' : 'center'}
          noWrap
        >
          {props.title}
        </Typography>
      </Box>
      <Box justifyContent={'flex-end'}>{props.children}</Box>
    </Stack>
  );
}
