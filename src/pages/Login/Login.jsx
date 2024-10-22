import { Box, FormControl, Link, Typography, TextField, Button, Paper } from "@mui/material";
import './Login.scss';
import { ErrorOutlineOutlined, FingerprintOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";

function Login(){
    return(
        <Box disableGutters className="layout_root">
            <Box disableGutters className="loginPage">
            <Box component="div" className="imageBox">
                <div className="imageText">
                    <Typography variant="h3">Bienvenido</Typography>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                    <img src="/src/assets/svg/login.svg" alt="login"/>
            </Box>
            <Box component="div" className="loginBox">
                <Box className="formBox">
                    <Typography variant="h3">Inicia sesión</Typography>
                    <Typography variant="body2">Todavía no tienes cuenta? <Link>Regístrate</Link></Typography>
                    <Box></Box>
                    {/* <Paper className="error_message">
                        <ErrorOutlineOutlined className="icon"/>
                        <Typography className="error_text">
                            Algo salió mal. Por favor, intenta de nuevo más tarde.
                        </Typography>
                    </Paper> */}
                    <FormControl>
                        <Box className="formControlBox">
                            <TextField
                            id="mail"
                            slotProps={{
                                inputLabel: {
                                shrink: true,
                                },
                            }}
                            placeholder="Intruce tu correo electrónico"
                            className="_formInput"
                            label="Correo electrónico"/>
                                <TextField 
                                id="password"            
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                                endIcon={<RemoveRedEyeOutlined/>}
                                placeholder="Intrudice tu contraseña"
                                className="_formInput" 
                                label="Contraseña"/>
                            <Button style={{borderRadius: '8px', height: '48px'}} variant="contained" size="large" endIcon={<FingerprintOutlined/>} >Iniciar sesión</Button>
                        </Box>
                    </FormControl>
                </Box>
            </Box>
        </Box>
        </Box>
    )
}

export default Login;