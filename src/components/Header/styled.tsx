import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import DeblurIcon from '@mui/icons-material/Deblur';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 32,
  backgroundColor: theme.palette.grey['200'],
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.11),
  },
  paddingRight: theme.spacing(3),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '75ch',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  color: alpha(theme.palette.common.black, 0.5),
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.25, 1, 1.25, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));

export const AppLogo = styled(DeblurIcon)(({ theme }) => ({
  cursor: 'pointer',
  marginRight: theme.spacing(1),
  minWidth: theme.spacing(4),
  color: theme.palette.common.black,
}));
