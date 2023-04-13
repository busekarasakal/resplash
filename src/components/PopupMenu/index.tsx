import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDeviceSize } from '../../hooks/useDeviceSize';

const StyledButton = styled(Button)(({ theme }) => ({
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

export function PopupMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { isLargeScreenDevice } = useDeviceSize();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledButton
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='outlined'
        startIcon={isLargeScreenDevice ? <MenuIcon /> : null}
        endIcon={isLargeScreenDevice ? <ExpandMoreIcon /> : null}
        disableRipple
      >
        {isLargeScreenDevice ? 'Menu' : 'M'}
      </StyledButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}
