import * as React from 'react';
import Masonry from '@mui/lab/Masonry';
import { useDeviceSize } from '../../hooks/useDeviceSize';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack, useTheme } from '@mui/material';
import { ProgressiveImage } from '../ProgressiveImage';
import { MasonryImageWrapper } from './styled';
import { ApiImage } from '../../shared/types';
import { Link } from 'react-router-dom';

export function ImageMasonry({ imageList }: { imageList: ApiImage[] }) {
  const theme = useTheme();
  const { isLargeScreenDevice, isMediumScreenDevice } = useDeviceSize();
  const imageColumnSize = isLargeScreenDevice
    ? 3
    : isMediumScreenDevice
    ? 2
    : 1;

  return (
    <Masonry columns={imageColumnSize} spacing={3} sx={{ width: 'auto' }}>
      {imageList.map((image) => (
        <Box key={`image_${image.id}`}>
          <Link to={image.links.html} target='_blank' rel='noopener noreferrer'>
            <MasonryImageWrapper>
              <ProgressiveImage image={image} />
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
                    {`${image.likes} likes`}
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
                  {image.user.username}
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
                  {image.description}
                </Typography>
              </Stack>
            </MasonryImageWrapper>
          </Link>
        </Box>
      ))}
    </Masonry>
  );
}
