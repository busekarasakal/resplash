import { useMediaQuery, useTheme } from '@mui/material';

export function useDeviceSize() {
  const theme = useTheme();
  const isLargeScreenDevice = useMediaQuery(theme.breakpoints.up('md'));

  return { isLargeScreenDevice };
}
