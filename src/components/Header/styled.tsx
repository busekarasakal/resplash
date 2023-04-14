import { styled } from '@mui/material/styles';
import DeblurIcon from '@mui/icons-material/Deblur';

export const AppLogo = styled(DeblurIcon)(({ theme }) => ({
  cursor: 'pointer',
  marginRight: theme.spacing(1),
  minWidth: theme.spacing(4),
  color: theme.palette.common.black,
}));
