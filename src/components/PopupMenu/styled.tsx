import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.grey['600'],
  borderRadius: 4,
  borderWidth: 1,
  borderColor: theme.palette.grey['200'],
  borderStyle: 'solid',
  padding: theme.spacing(0.6, 2, 0.6, 2),
  '&:hover': {
    backgroundColor: theme.palette.grey['100'],
    borderColor: theme.palette.grey['300'],
  },
  [theme.breakpoints.down('md')]: {
    minHeight: theme.spacing(2),
    minWidth: theme.spacing(2),
  },
}));
