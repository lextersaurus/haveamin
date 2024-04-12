import {
  AccountCircleOutlined as AccountCircleIcon,
  CalendarTodayOutlined as CalendarIcon,
  EditCalendarOutlined as EditCalendarIcon,
  HomeOutlined as HomeIcon,
  LogoutOutlined as LogoutIcon,
} from '@mui/icons-material'
import {
  Box,
  List,
  ListItem,
} from "@mui/material"
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"

const links = {
  'Home': {
    'icon': <HomeIcon />,
    'to': '/',
  },
  'Mis eventos': {
    'icon': <CalendarIcon />,
    'to': '/miseventos',
  },
  'Nuevo evento': {
    'icon': <EditCalendarIcon />,
    'to': '/evento/crear',
  },
  'Mi perfil': {
    'icon': <AccountCircleIcon />,
    'to': '/miperfil',
  }
}

const NavbarLink = (props) => {
  const location = useLocation()
  const [backgroundColor, setbackgroundColor] = useState(null)

  useEffect(() => {
    setbackgroundColor(props.to == location.pathname ? 'white' : null)
  }, [location, props.to])

  return (
    <Link onClick={props.onClick} title={props.title} to={props.to} style={{ height: '40px', width: '40px', margin: '8px 0', padding: '24px', backgroundColor, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', color: 'inherit' }}>
      {props.children}
    </Link>
  )
}

const Header = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    navigate('/')
  }

  return (
    <Box component='nav' sx={{ margin: '124px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
      <List >
        {Object.keys(links).map((key, index) => (
          <ListItem key={index} sx={{ padding: '0', color: 'text.primary', textDecoration: 'none' }}>
            <NavbarLink to={links[key].to} title={key}>
              {links[key].icon}
            </NavbarLink>
          </ListItem>
        ))}
      </List>
      <NavbarLink title='Logout' onClick={() => {handleLogout()}}>
        <LogoutIcon />
      </NavbarLink>
    </Box>
  )
}

NavbarLink.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.object
}


export default Header
