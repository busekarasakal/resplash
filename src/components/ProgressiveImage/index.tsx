import * as React from 'react';
import Box from '@mui/material/Box';
import { useProgressiveImage } from '../../hooks/useProgressiveImage';
import { ApiImage } from '../../shared/types';

export function ProgressiveImage({ image }: { image: ApiImage }) {
  const { src, isLoading } = useProgressiveImage(
    `${image.urls.raw}&w=10`,
    `${image.urls.raw}&w=300`,
  );

  return (
    <Box id='progressive-img'>
      <img
        src={src}
        alt={image.alt_description}
        loading='lazy'
        style={{
          display: 'block',
          width: '100%',
          filter: isLoading ? 'blur(1.5rem)' : 'none',
          transition: isLoading ? 'none' : 'filter 0.2s ease-out',
        }}
      />
    </Box>
  );
}
