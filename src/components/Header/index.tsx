import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { AppLogo } from './styled';
import { PropsWithChildren } from 'react';

export function Header(props: PropsWithChildren<unknown>) {
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
          {props.children}
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
