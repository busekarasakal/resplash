import * as React from 'react';
import Box from '@mui/material/Box';
import { useProgressiveImage } from '../../hooks/useProgressiveImage';

export function ProgressiveImage({
  item,
}: {
  item: { img: string; title: string };
}) {
  const { src, isLoading } = useProgressiveImage(
    `${item.img}?w=10&auto=format`,
    `${item.img}?w=400&auto=format`,
  );

  return (
    <Box id='progressive-img'>
      <img
        src={src}
        alt={item.title}
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
