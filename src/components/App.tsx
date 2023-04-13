import * as React from 'react';
import { InputAdornment, Stack, useTheme } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { PopupMenu } from './PopupMenu';
import { useDeviceSize } from '../hooks/useDeviceSize';
import { ImageMasonry } from './ImageMasonry';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import SortIcon from '@mui/icons-material/Sort';
import DeblurIcon from '@mui/icons-material/Deblur';

const Search = styled('div')(({ theme }) => ({
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

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  color: alpha(theme.palette.common.black, 0.5),
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.25, 1, 1.25, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));

export default function App() {
  const theme = useTheme();
  const { isLargeScreenDevice } = useDeviceSize();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='static'
          sx={{
            backgroundColor: theme.palette.common.white,
            boxShadow: 0,
          }}
        >
          <Toolbar>
            <DeblurIcon
              fontSize={'large'}
              sx={{
                marginRight: theme.spacing(1),
                cursor: 'pointer',
                minWidth: theme.spacing(4),
                color: theme.palette.common.black,
              }}
            />
            <Search>
              <SearchIconWrapper>
                <SearchIcon color={'action'} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
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
                marginRight: theme.spacing(1),
                cursor: 'pointer',
                minWidth: theme.spacing(4),
                display: { xs: 'none', md: 'block' },
              }}
            >
              ReSplash
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {/*Body*/}
      <Stack
        sx={{
          height: '100%',
          marginTop: theme.spacing(3),
          padding: theme.spacing(3),
          backgroundColor: theme.palette.common.white,
        }}
        gap={4}
      >
        <Stack
          direction={isLargeScreenDevice ? 'row' : 'column'}
          sx={{
            paddingLeft: theme.spacing(1.25),
            paddingRight: theme.spacing(1.25),
          }}
          alignItems='center'
          gap={1}
        >
          <Box width='100%'>
            <Typography
              variant='h4'
              fontWeight='bold'
              textAlign={isLargeScreenDevice ? 'left' : 'center'}
              noWrap
            >
              Tokyo
            </Typography>
          </Box>
          <Stack direction='row' gap={2}>
            <PopupMenu
              options={[
                { label: 'Black and White', value: 'black_and_white' },
                { label: 'Blue', value: 'blue' },
              ]}
              text='Color'
              icon={<ColorLensIcon />}
              value={'red'}
              onChange={() => {}}
              isNewFunction
            />
            <PopupMenu
              options={[
                { label: 'Landscape', value: 'landscape' },
                { label: 'Portrait', value: 'portrait' },
              ]}
              text='Orientation'
              icon={<AutoAwesomeMosaicIcon />}
              value={'landscape'}
              onChange={() => {}}
            />
            <PopupMenu
              text='Sort'
              options={[
                { label: 'Relevance', value: 'relevance' },
                { label: 'Latest', value: 'latest' },
              ]}
              icon={<SortIcon />}
              value={'popular'}
              onChange={() => {}}
            />
          </Stack>
        </Stack>
        <Stack alignItems='center'>
          <ImageMasonry />
        </Stack>
      </Stack>
    </Box>
  );
}
