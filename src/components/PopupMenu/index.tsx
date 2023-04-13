import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
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

type PopupMenuOption = {
  label: string;
  value: string;
};

export function PopupMenu({
  icon,
  text,
  options,
  onChange,
  value,
  isNewFunction,
}: {
  icon: React.ReactNode;
  text: string;
  options: PopupMenuOption[];
  onChange: (value: string) => void;
  value: string;
  isNewFunction?: boolean;
}) {
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
      <Badge
        badgeContent={'New!'}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        color='error'
        invisible={!isNewFunction}
      >
        <StyledButton
          onClick={handleClick}
          variant='outlined'
          startIcon={isLargeScreenDevice ? icon : null}
          endIcon={isLargeScreenDevice ? <ExpandMoreIcon /> : null}
          disableRipple
        >
          {isLargeScreenDevice ? text : icon}
        </StyledButton>
      </Badge>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((option) => {
          const isSelected = option.value === value;
          return (
            <MenuItem
              key={option.value}
              onClick={() => {
                onChange(option.value);
                handleClose();
              }}
              selected={isSelected}
            >
              {option.label}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
