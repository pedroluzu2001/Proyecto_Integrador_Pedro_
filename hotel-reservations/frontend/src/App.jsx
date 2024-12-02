import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css'; // Asegúrate de tener un archivo CSS para los estilos globales

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};

export default App;
