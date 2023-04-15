import * as React from 'react';
import Box from '@mui/material/Box';
import { ApiImage } from '../../shared/types';
import { useEffect, useRef, useState } from 'react';
import { Blurhash } from 'react-blurhash';

export function ProgressiveImage({ image }: { image: ApiImage }) {
  const [imageObject, setImageObject] = useState<HTMLImageElement | null>(null);
  const ref = useRef<HTMLElement>();
  const approximateHeight =
    image.height / (image.width / (ref?.current?.clientWidth ?? 300));
  const isLoading = imageObject == null;

  useEffect(() => {
    const img = new Image();
    img.src = `${image.urls.raw}&w=600`;
    img.onload = () => {
      setImageObject(img);
    };
  }, []);

  return (
    <Box
      id='progressive-img'
      sx={{
        filter: isLoading ? 'blur(1.5rem)' : 'none',
        transition: isLoading ? 'none' : 'filter 0.2s ease-out',
      }}
      ref={ref}
      data-cy='progressive-img'
    >
      {isLoading ? (
        <Blurhash
          hash={image?.blur_hash ?? 'LoC%a7IoIVxZ_NM|M{s:%hRjWAo0'}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          style={{
            minWidth: '100%',
            height: approximateHeight,
          }}
        />
      ) : (
        <img
          src={imageObject?.src}
          alt={image.alt_description}
          loading='lazy'
          style={{
            display: 'block',
            width: '100%',
          }}
        />
      )}
    </Box>
  );
}
