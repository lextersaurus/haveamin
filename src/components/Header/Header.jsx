import { AccountCircle, EditCalendar } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Container, IconButton, InputBase, Menu, MenuItem, Toolbar, Tooltip, Typography, alpha, styled } from "@mui/material";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
const settings = ['Perfil', 'Mis Eventos', 'Cerrar sesión'];


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '52ch',
      '&:focus': {
        width: '60ch',
      },
      
    },[theme.breakpoints.up('lg')]: {
      width: '82ch',
      '&:focus': {
        width: '90ch',
      },
    },
  },
}))

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate()

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }

  const handleLogout = () => {
      localStorage.removeItem('token')
      navigate('/') 
  }

  const handleMenuClick = (setting) => {
    handleCloseUserMenu();
    if (setting === 'Mis Eventos') {
      navigate('/miseventos');
    } else if (setting === 'Cerrar sesión') {
      handleLogout();
    }
  }
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
  }

  return (
    <AppBar position="sticky">
      <Container maxWidth="100vw">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <a href="/"style={{ textDecoration: 'none' }}>Haveamin?</a>
          </Typography>

         
{/* Barra de busqueda */} 
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search' }}
                value={searchQuery}
                onChange={handleSearchChange}
                />
            </Search>
          </Box>

{/* Menu Crear evento */}
          <Box >
            <IconButton  >
              <EditCalendar>
              </EditCalendar>
            </IconButton>
          </Box>


{/* Menu usuario */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} >
                <AccountCircle>
                </AccountCircle>
              </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => handleMenuClick(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header