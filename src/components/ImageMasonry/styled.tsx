import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const MasonryImageWrapper = styled(Box)(() => ({
  cursor: 'pointer',
  minHeight: 20,
  transition: 'all .1s ease-in-out',
  ':hover': {
    transition: 'all 0.5s ease',
    transform: 'scale(1.02)',
    '& #progressive-img': {
      WebkitFilter: 'brightness(60%)',
      WebkitTransition: 'all 0.1s ease',
      MozTransition: 'all 0.1s ease',
      OTransition: 'all 0.1s ease',
      msTransition: 'all 0.1s ease',
    },
    '& .MuiTypography-root': {
      display: 'block',
      WebkitFilter: 'brightness(100%)',
    },
  },
  '& .MuiTypography-root': {
    display: 'none',
  },
}));
