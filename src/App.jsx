// src/App.jsx
import React from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;