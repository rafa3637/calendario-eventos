import React from 'react';
import './App.css';
import Calendar from './componentes/Calendar/Calendar';

function App() {
  return (
    <div className="App">
      <header className="topo">
        <h1 className="titulo">Calendário de Eventos</h1>
      </header>
      <Calendar />
    </div>
  );
}

export default App;
