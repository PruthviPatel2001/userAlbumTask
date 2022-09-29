import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'

import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

;

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{backgroundColor:'#2B4865'}}>
      <AppBar position="static" style={{backgroundColor:'#2B4865'}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PicsUp
          </Typography>
          <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header