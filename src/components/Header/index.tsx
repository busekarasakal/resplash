import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { AppLogo, Search, SearchIconWrapper, StyledInputBase } from './styled';

export function Header() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          backgroundColor: theme.palette.common.white,
          boxShadow: 0,
        }}
      >
        <Toolbar>
          <AppLogo fontSize={'large'} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon color={'action'} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              endAdornment={
                <InputAdornment position='end'>
                  <CloseIcon color={'action'} fontSize={'small'} />
                </InputAdornment>
              }
            />
          </Search>
          <Box flexGrow={1} />
          <Typography
            variant='h6'
            noWrap
            component='div'
            color={theme.palette.common.black}
            sx={{
              display: { xs: 'none', md: 'block' },
              marginRight: theme.spacing(1),
              minWidth: theme.spacing(4),
              cursor: 'pointer',
            }}
          >
            ReSplash
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
