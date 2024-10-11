// src/App.jsx
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter> {/* Cambia Router por BrowserRouter */}
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Agrega aquí más rutas según sea necesario */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
