import * as React from 'react';
import Masonry from '@mui/lab/Masonry';
import useProgressiveImage from '../../hooks/useProgressiveImage';
import { useDeviceSize } from '../../hooks/useDeviceSize';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export function ProgressiveImage({
  item,
}: {
  item: { img: string; title: string };
}) {
  const { src, isLoading } = useProgressiveImage(
    `${item.img}?w=25&auto=format`,
    `${item.img}?w=162&auto=format`,
  );

  return (
    <Box id='progressive-img'>
      <img
        src={`${src}?w=162&auto=format`}
        srcSet={`${src}?w=162&auto=format&dpr=2 2x`}
        alt={item.title}
        loading='lazy'
        style={{
          display: 'block',
          width: '100%',
          filter: isLoading ? 'blur(20px)' : 'none',
          transition: isLoading ? 'none' : 'filter 0.3s ease-out',
        }}
      />
    </Box>
  );
}

export function ImageMasonry() {
  const { isLargeScreenDevice, isMediumScreenDevice } = useDeviceSize();
  const imageColumnSize = isLargeScreenDevice
    ? 3
    : isMediumScreenDevice
    ? 2
    : 1;

  return (
    <Masonry columns={imageColumnSize} spacing={3}>
      {itemData.map((item, index) => (
        <Box key={index}>
          <Box
            sx={{
              cursor: 'pointer',
              transition: 'all .1s ease-in-out',
              ':hover': {
                transition: 'all 0.5s ease',
                transform: 'scale(1.02)',
                '& #progressive-img': {
                  '-webkit-filter': 'brightness(60%)',
                  '-webkit-transition': 'all 0.1s ease',
                  '-moz-transition': 'all 0.1s ease',
                  '-o-transition': 'all 0.1s ease',
                  '-ms-transition': 'all 0.1s ease',
                },
                '& .MuiTypography-root': {
                  display: 'block',
                  '-webkit-filter': 'brightness(100%)',
                },
              },
              '& .MuiTypography-root': {
                display: 'none',
              },
            }}
          >
            <ProgressiveImage item={item} />
            <Stack>
              <Box>
                <Typography
                  color='lightgrey'
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                  }}
                >
                  315
                </Typography>
              </Box>
              <Typography
                color='white'
                sx={{
                  position: 'absolute',
                  bottom: 40,
                  left: 20,
                }}
              >
                Buse Karasakal
              </Typography>
              <Typography
                color='lightgrey'
                fontSize={14}
                noWrap
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: 20,
                  width: '85%',
                }}
              >
                Lorem ipsum dolor sit amet
                asdasdasdasdasdasddsdfasdfasgdasgdasdg
              </Typography>
            </Stack>
          </Box>
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
