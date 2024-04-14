import {
  AccountCircleOutlined as AccountCircleIcon,
  CalendarTodayOutlined as CalendarIcon,
  EditCalendarOutlined as EditCalendarIcon,
  HomeOutlined as HomeIcon,
  LogoutOutlined as LogoutIcon,
  Menu as MenuIcon,
} from '@mui/icons-material'
import {
  Box,
  IconButton,
  List,
  ListItem
} from "@mui/material"
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import logolightImg from '../../assets/logo/logolight.png'

import './Header.css'

const links = {
  'Home': {
    'icon': HomeIcon,
    'to': '/',
  },
  'Mis eventos': {
    'icon': CalendarIcon,
    'to': '/miseventos',
  },
  'Nuevo evento': {
    'icon': EditCalendarIcon,
    'to': '/evento/crear',
  },
  'Mi perfil': {
    'icon': AccountCircleIcon,
    'to': '/miperfil',
  }
}

const NavbarLink = ({ to, onClick, title, canShowLinkTitle, Icon }) => {
  const location = useLocation()
  const [backgroundColor, setbackgroundColor] = useState(null)

  useEffect(() => {
    setbackgroundColor(to == location.pathname ? 'white' : null)
  }, [location, to])

  return (
    <Link
      onClick={onClick}
      title={title}
      to={to}
      style={{
        width: canShowLinkTitle ? '200px' : '48px',
        transition: 'width 500ms ease-in-out',
        overflow: 'hidden',
        margin: '8px 0',
        padding: '12px',
        backgroundColor,
        display: 'flex',
        borderRadius: '16px',
        color: 'inherit',
        textWrap: 'nowrap',
        textDecoration: 'none',
      }
      }
    >
      <Icon />
      <span
        style={{
          paddingLeft: '16px',
        }}
      >
        {title}
      </span>
    </Link >
  )
}

const Header = () => {
  const navigate = useNavigate()
  const [canShowLinkTitles, setCanShowLinkTitles] = useState(false)

  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <Box component='nav' sx={{
      margin: '16px 24px 40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'start',
    }} >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start'
      }}>
        <Box sx={{
          width: canShowLinkTitles ? '200px' : '48px',
          transition: 'width 500ms ease-in-out',
          textWrap: 'nowrap',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start'
        }}>
          <img src={logolightImg} alt="haveamin?" className='navbar-logo' />
          <span style={{
            padding: '16px',
            color: '#fff9f1'
          }}>haveamin?</span>
        </Box>
        <IconButton aria-label="" onClick={() => setCanShowLinkTitles(!canShowLinkTitles)}>
          <MenuIcon />
        </IconButton>
      </Box>
      <List >
        {Object.keys(links).map((key, idx) => (
          <ListItem key={idx} sx={{
            padding: '0',
            color: 'text.primary',
            textDecoration: 'none',
          }}>
            <NavbarLink
              to={links[key].to}
              title={key}
              Icon={links[key].icon}
              canShowLinkTitle={canShowLinkTitles}
            />
          </ListItem>
        ))}
      </List>
      <NavbarLink
        title='Cerrar sesión'
        Icon={LogoutIcon}
        canShowLinkTitle={canShowLinkTitles}
        onClick={() => { handleLogout() }}
      />
    </Box>
  )
}

NavbarLink.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  canShowLinkTitle: PropTypes.bool,
  Icon: PropTypes.object,
}


export default Header
