import "./Header.scss";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
} from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import NotificationDrawer from "./Notifications/NotificationDrawer";


function Header() {
  const [scrollBar, setScrollBar] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollBar(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  return (
    <>
    <AppBar component={"header"} elevation={4} className={`_header ${scrollBar ? "scrolled" : ""}`}>
      <Toolbar>
        <Container maxWidth="false" className="_headerContainer">
            <IconButton>
            <Icon icon="fa6-solid:bars-staggered" />
            </IconButton>
            <Button>
                LOGO
            </Button>
          <Box className="_middle"></Box>
          <Box>
            <Box></Box>
            <IconButton aria-label="delete" onClick={toggleDrawer(true)}>
              <Icon icon="ion:notifications" />
            </IconButton>
            <IconButton aria-label="delete">
            <Icon icon="fluent:people-28-filled" />
            </IconButton>
            <IconButton aria-label="delete">
            <Icon icon="solar:settings-bold-duotone" />
            </IconButton>
            <IconButton aria-label="delete">
                <AccountCircleRoundedIcon />
            </IconButton>            
          </Box>
        </Container>
      </Toolbar>
    </AppBar>

    <NotificationDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
  </>
  );
}

export default Header;
