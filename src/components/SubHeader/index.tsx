import * as React from 'react';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PopupMenu } from '../PopupMenu';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import SortIcon from '@mui/icons-material/Sort';
import { useDeviceSize } from '../../hooks/useDeviceSize';

export function SubHeader({ title }: { title: string }) {
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
          {title}
        </Typography>
      </Box>
      <Stack direction='row' gap={2}>
        <PopupMenu
          options={[
            { label: 'Black and White', value: 'black_and_white' },
            { label: 'Blue', value: 'blue' },
          ]}
          text='Color'
          icon={<ColorLensIcon />}
          value={'red'}
          onChange={() => {}}
          isNewFeature
        />
        <PopupMenu
          options={[
            { label: 'Landscape', value: 'landscape' },
            { label: 'Portrait', value: 'portrait' },
          ]}
          text='Orientation'
          icon={<AutoAwesomeMosaicIcon />}
          value={'landscape'}
          onChange={() => {}}
        />
        <PopupMenu
          text='Sort'
          options={[
            { label: 'Relevance', value: 'relevance' },
            { label: 'Latest', value: 'latest' },
          ]}
          icon={<SortIcon />}
          value={'popular'}
          onChange={() => {}}
        />
      </Stack>
    </Stack>
  );
}
