import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login/Login";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { lightTheme } from "./utils/theme";
import Dashboard from "./pages/Dashboard/Dashboard";



function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <AuthProvider>
        <Routes>
          <Route path="/" Component={Login}/>
          <Route path="/dashboard" Component={Dashboard}/>
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
