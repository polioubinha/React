import {
    Drawer,
    Box,
    Typography,
    Tabs,
    Tab,
    IconButton,
    Stack,
    Button,
    ButtonBase,
    ListItemButton,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
  } from "@mui/material";
  import './NotificationDrawer.scss';
  import { Icon } from "@iconify/react/dist/iconify.js";
  import { useState } from "react";
  
  function NotificationDrawer({ open, toggleDrawer }) {
      const [value, setValue] = useState(0);
  
      const handleChange = (event, newValue) => {
          setValue(newValue);
      };
  
      const handleTabsClick = (event) => {
          event.stopPropagation(); // Evitar que el clic cierre el drawer
      };
  
      const renderTabContent = () => {
          switch (value) {
              case 0:
                  return (
                    <Box>
                        <ListItemButton  alignItems={'flex-start'}>
                            <ListItemAvatar>
                                <Avatar src="https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp"></Avatar>
                            </ListItemAvatar>
                            <Stack direction={'column'} flexGrow={1}>
                                <ListItemText className="_notificationName">
                                    <Box>
                                        <p style={{margin: 0}}><strong>John Doe</strong> te ha mencionado</p>
                                    </Box>
                                    <Stack className="_notificationDate" direction={'row'}>
                                        hace una hora 
                                        <Box> - </Box>
                                        &quot;Proyecto 2&quot;
                                    </Stack>
                                </ListItemText>
                                <Stack direction={'column'} alignItems={'flex-start'}>
                                    <Box className="_notificationMsg">
                                        <Box>
                                            <p><strong>@Jaydon Frankie</strong> feedback by asking questions or just leave a note of appreciation.</p>
                                        </Box>
                                    </Box>
                                    <Button variant="contained" size="small" style={{backgroundColor: "#1C252E"}}>Responder</Button>
                                </Stack>
                            </Stack>
                        </ListItemButton>
                    </Box>
                  );
              case 1:
                  return (
                      <Typography variant="body1">
                          Esta es la información para la pestaña 2. Describe los eventos, mensajes o actualizaciones importantes aquí.
                      </Typography>
                  );
              case 2:
                  return (
                      <Typography variant="body1">
                          Información de la pestaña 3. Incluye instrucciones o datos útiles para el usuario.
                      </Typography>
                  );
              default:
                  return null;
          }
      };
  
      return (
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} className="_notificationDrawer">
              <Box
                  role="presentation"
                  sx={{ width: 400 }}
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                  className="_notificationBox"
              >
                  <Stack className="_titleStack" direction={'row'} justifyContent="space-between" alignItems="center" sx={{ padding: '16px' }}>
                      <Typography variant="h6">Notificaciones</Typography>
                      <IconButton>
                          <Icon icon="solar:settings-bold-duotone" />
                      </IconButton>
                  </Stack>
                  <Tabs
                      onChange={handleChange}
                      value={value}
                      selectionFollowsFocus
                      className="_notificationsTabs"
                      centered
                      variant="fullWidth"
                      onClick={handleTabsClick} // Evitar que el clic cierre el drawer
                  >
                      <Tab label="Pestaña 1" icon={<span>12</span>} iconPosition="end"/>
                      <Tab label="Pestaña 2" />
                      <Tab label="Pestaña 3" />
                  </Tabs>
                  
                  {/* Contenido de las pestañas */}
                  <Box sx={{ padding: '16px' }}>
                      {renderTabContent()}
                  </Box>
  
                  {/* Botón al final */}
                  <Stack spacing={2} sx={{ padding: '16px' }}>
                      <Button variant="contained" color="primary" fullWidth>
                          Acciones
                      </Button>
                  </Stack>
              </Box>
          </Drawer>
      );
  }
  
  export default NotificationDrawer;
  