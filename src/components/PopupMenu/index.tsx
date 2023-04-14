import React, { ReactNode, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Badge } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDeviceSize } from '../../hooks/useDeviceSize';
import { StyledButton } from './styled';

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
  isNewFeature,
}: {
  icon: ReactNode;
  text: string;
  options: PopupMenuOption[];
  onChange: (value: string) => void;
  value: string;
  isNewFeature?: boolean;
}) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
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
        color='error'
        invisible={!isNewFeature}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <StyledButton
          variant='outlined'
          onClick={handleClick}
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
