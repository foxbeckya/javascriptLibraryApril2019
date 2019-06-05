import React from 'react';

import Props from './components/Props/Props';
import EventHandlers from './components/EventHandlers/EventHandlers';
import logo from './logo.svg';
import './App.css';
import State from './components/State/State';

function App() {
  return (
    <div className="App">
      <Props />
      <EventHandlers />
      <State />
    </div>
  );
}

export default App;
