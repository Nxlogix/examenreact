import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/login';
import Registro from './components/register';
import UsuariosList from './components/usuariosList';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css'; // Asegúrate de que este archivo contenga las clases definidas

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta protegida para UsuariosList, sin encabezado */}
          <Route
            path="/usuarios"
            element={
              <ProtectedRoute>
                <UsuariosList />
              </ProtectedRoute>
            }
          />
          {/* Rutas con encabezado */}
          <Route
            path="*"
            element={
              <>
                <header className="app-header">
                  <h1 className="app-title">Examen 3</h1>
                  <nav className="app-nav">
                    <Link to="/login" className="nav-link">Iniciar Sesión</Link>
                    <Link to="/register" className="nav-link">Registrarse</Link>
                  </nav>
                </header>
                <main className="app-main">
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registro />} />
                  </Routes>
                </main>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;