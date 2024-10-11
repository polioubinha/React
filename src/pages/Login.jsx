import {
  Alert,
  AlertTitle,
  Card,
  Container,
  Divider,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import {
  AutoFixHighRounded,
  ConstructionRounded,
  SettingsSuggestRounded,
  ThumbUpAltRounded,
  CloseOutlined,
} from "@mui/icons-material";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar email
    if (!validateEmail(email)) {
      setEmailError("Por favor, introduce un email válido.");
      return;
    } else {
      setEmailError(""); 
    }

    const isLoggedIn = login(email, password);

    if (!isLoggedIn) {
      setLoginError("Usuario no encontrado o credenciales incorrectas.");
    } else {
      setLoginError("");
      if (isAuthenticated) {
        console.log("Usuario autenticado");
      }
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setLoginError(false), 400); 
  };

  return (
    <Container maxWidth="false" className="container">
    <Container>
    <div className="alerts">
        {loginError && (
          <Alert
            severity="error"
            className={`custom-alert ${!isVisible ? "hide" : ""}`}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleClose}
              >
                <CloseOutlined fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>Error</AlertTitle>
            {loginError}
          </Alert>
        )}
      </div>
    </Container>
      <Container className="center">
        
        <Container className="message" maxWidth="sm">
          <List>
            <ListItem className="itemLista">
              <ListItemIcon>
                <SettingsSuggestRounded />
              </ListItemIcon>
              <ListItemText
                primary="Adaptable performance"
                secondary="Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks."
              />
            </ListItem>
            <ListItem className="itemLista">
              <ListItemIcon>
                <ConstructionRounded />
              </ListItemIcon>
              <ListItemText
                primary="Built to last"
                secondary="Experience unmatched durability that goes above and beyond with lasting investment."
              />
            </ListItem>
            <ListItem className="itemLista">
              <ListItemIcon>
                <ThumbUpAltRounded />
              </ListItemIcon>
              <ListItemText
                primary="Great user experience"
                secondary="Integrate our product into your routine with an intuitive and easy-to-use interface."
              />
            </ListItem>
            <ListItem className="itemLista">
              <ListItemIcon>
                <AutoFixHighRounded />
              </ListItemIcon>
              <ListItemText
                primary="Innovative functionality"
                secondary="Stay ahead with features that set new standards, addressing your evolving needs better than the rest."
              />
            </ListItem>
          </List>
        </Container>
        <Container maxWidth="sm">
          <Card className="loginCard">
            <Typography variant="h5" className="title">
              Inicia sesión
            </Typography>
            <Typography variant="body2" className="subtitle">
              Accede al panel de administración
            </Typography>
            <form onSubmit={handleSubmit}>
              <div className="mail">
                <InputLabel className="inputLabel">
                  Correo electrónico
                </InputLabel>
                <TextField
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Introduce email"
                  variant="outlined"
                  fullWidth
                  size="small"
                  margin="normal"
                  error={!!emailError}
                  helperText={emailError} 
                />
              </div>
              <div className="password">
                <div className="titlePass">
                  <InputLabel className="inputLabel">Contraseña</InputLabel>
                  <Link className="forgot">¿Contraseña olvidada?</Link>
                </div>
                <TextField
                  className="input"
                  size="small"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                  fullWidth
                  margin="normal"
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                margin="normal"
              >
                Iniciar sesión
              </Button>
            </form>
            <Typography variant="body2" className="register">
              ¿Todavía no tienes una cuenta?{" "}
              <Link className="forgot">¡Solicítala ahora!</Link>{" "}
            </Typography>
          </Card>
        </Container>
      </Container>

      <Container maxWidth="lg" className="footer">
          <Divider className="divider"/>
        <footer className="footer2">
          <Typography variant="body2" className="footerText">Made by Poli Oubiña</Typography>
          <Typography variant="body2" className="footerText">
            © 2024 Todos los derechos reservados
          </Typography>
        </footer>
      </Container>
    </Container>
  );
}

export default Login;
