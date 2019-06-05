import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Auth from './components/Auth/Auth';
import Pie from './components/Pies/Pie/Pie';
import Pies from './components/Pies/Pies';


function App() {
  const [sessionToken, setSessionToken] = useState(undefined);

  const viewConductor =() => {
    return sessionToken !== undefined ? <Pies /> : <Auth />
  }
  return (
    <div className="App">
      <Navbar />
      {viewConductor()}
    </div>
  );
}

export default App;