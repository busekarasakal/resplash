import * as React from 'react';
import Masonry from '@mui/lab/Masonry';
import { useDeviceSize } from '../../hooks/useDeviceSize';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack, useTheme } from '@mui/material';
import { ProgressiveImage } from '../ProgressiveImage';
import { MasonryImageWrapper } from './styled';

export function ImageMasonry() {
  const theme = useTheme();
  const { isLargeScreenDevice, isMediumScreenDevice } = useDeviceSize();
  const imageColumnSize = isLargeScreenDevice
    ? 3
    : isMediumScreenDevice
    ? 2
    : 1;

  return (
    <Masonry columns={imageColumnSize} spacing={3}>
      {itemData.map((item) => (
        <Box key={`image_${item.img}_${item.title}`}>
          <MasonryImageWrapper>
            <ProgressiveImage item={item} />
            <Stack>
              <Box>
                <Typography
                  color={theme.palette.common.white}
                  sx={{
                    position: 'absolute',
                    top: theme.spacing(1.5),
                    right: theme.spacing(1.5),
                  }}
                >
                  315 likes
                </Typography>
              </Box>
              <Typography
                color={theme.palette.common.white}
                sx={{
                  position: 'absolute',
                  bottom: theme.spacing(4),
                  left: theme.spacing(2),
                }}
              >
                Buse Karasakal
              </Typography>
              <Typography
                color={theme.palette.grey['400']}
                fontSize={14}
                noWrap
                sx={{
                  position: 'absolute',
                  bottom: theme.spacing(2),
                  left: theme.spacing(2),
                  width: '85%',
                }}
              >
                Lorem ipsum dolor sit amet
                asdasdasdasdasdasddsdfasdfasgdasgdasdg
              </Typography>
            </Stack>
          </MasonryImageWrapper>
        </Box>
      ))}
    </Masonry>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    title: 'Snacks',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    title: 'Tower',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
    title: 'Tree',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
    title: 'Camping Car',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
    title: 'Mountain',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
].sort(() => (Math.random() > 0.5 ? 1 : -1));
