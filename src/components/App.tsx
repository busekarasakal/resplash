import * as React from 'react';
import {Divider, InputAdornment, useTheme} from "@mui/material";
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import CloseIcon from '@mui/icons-material/Close';

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: 32,
    backgroundColor: theme.palette.grey['200'],
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.11),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    paddingRight: theme.spacing(3),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '75ch',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    width: '100%',
    color: alpha(theme.palette.common.black, 0.5),
    '& .MuiInputBase-input': {
        padding: theme.spacing(1.25, 1, 1.25, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
    },
}));

const HeaderItem = styled(MenuItem)(({theme}) => ({
    color: theme.palette.grey['600'],
    borderColor: theme.palette.grey['600'],
    '&:hover': {
        color: theme.palette.common.black,
        borderColor: theme.palette.common.black,
        backgroundColor: 'transparent'
    },
}));

const GenericButton = styled(HeaderItem)(({theme}) => ({
    color: theme.palette.grey['600'],
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.palette.grey['400'],
    borderStyle: 'solid',
    padding: theme.spacing(0.6, 1, 0.6, 1),
    '&:hover': {
        color: theme.palette.common.black,
        backgroundColor: 'transparent',
        borderColor: theme.palette.common.black,
    },
}));

const EndIconsWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export default function App() {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{
                backgroundColor: theme.palette.common.white,
                boxShadow: 0,
            }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        color={theme.palette.common.black}
                        sx={{minWidth: 24, display: {xs: 'none', sm: 'block'}}}
                    >
                        Re
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon
                                color={'action'}
                            />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <CloseIcon
                                        color={'action'}
                                        fontSize={'small'}
                                        // sx={{
                                        //     position: 'absolute',
                                        //     right: '50%',
                                        //     ":hover": {cursor: 'pointer'},
                                        //     display: {xs: 'none', md: 'flex'}
                                        // }}
                                    />
                                    <Divider orientation="vertical"
                                             variant='middle'
                                             sx={{
                                                 height: 16,
                                                 borderColor: theme.palette.grey['400'],
                                                 marginLeft: theme.spacing(1),
                                                 marginRight: theme.spacing(1),
                                             }}
                                    />
                                    <CenterFocusWeakIcon
                                        color={'action'}
                                        fontSize={'small'}
                                        // sx={{
                                        //     position: 'absolute',
                                        //     right: theme.spacing(2),
                                        //     display: {xs: 'none', md: 'flex'}
                                        // }}
                                    />
                                </InputAdornment>}
                        />
                    </Search>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <HeaderItem>
                            <Typography textAlign="center">Explore</Typography>
                        </HeaderItem>
                        <HeaderItem>
                            <Typography textAlign="center">Advertise</Typography>
                        </HeaderItem>
                        <HeaderItem>
                            <Typography textAlign="center">ReSplash+</Typography>
                        </HeaderItem>
                    </Box>
                    <Divider
                        color={theme.palette.grey['300']}
                        orientation="vertical"
                        variant='middle'
                        flexItem
                        sx={{display: {xs: 'none', md: 'flex'}}}
                    />
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <HeaderItem>
                            <Typography textAlign="center">Log in</Typography>
                        </HeaderItem>
                        <GenericButton>
                            <Typography textAlign="center">Submit a photo</Typography>
                        </GenericButton>
                    </Box>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{marginLeft: '1ch'}}
                    >
                        <MenuIcon
                            color={'action'}
                        />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}
