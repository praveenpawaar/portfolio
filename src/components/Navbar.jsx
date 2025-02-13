import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { Squash as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';

const menuItems = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Skills', link: '#skills' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact Us', link: '#contact' },
  { name: 'Resume', link: '/assets/resume.pdf', external: true },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Toggle Drawer for mobile menu
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  // Drawer list for mobile view
  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      data-aos="fade-right"
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component="a"
            href={item.link}
            target={item.external ? '_blank' : '_self'}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" data-aos="fade-down">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyPortfolio
        </Typography>

        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" aria-label="menu">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </IconButton>
            <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
              {drawerList}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                component="a"
                href={item.link}
                target={item.external ? '_blank' : '_self'}
                data-aos="fade-down"
                data-aos-delay={index * 100}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
