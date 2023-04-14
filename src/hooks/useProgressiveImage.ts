import { useEffect, useState } from 'react';

export const useProgressiveImage = (
  lowQualitySrc: string,
  highQualitySrc: string,
) => {
  const [src, setSrc] = useState(lowQualitySrc);
  const isLoading = src === lowQualitySrc;

  useEffect(() => {
    setSrc(lowQualitySrc);

    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);

  return { src, isLoading };
};
