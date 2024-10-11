// src/App.jsx
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter> {}
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
