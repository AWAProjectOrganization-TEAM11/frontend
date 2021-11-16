
import styles from './App.module.css';
import Login from './components/Login';
import Start from './components/Start';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ravintolat from '/.Ravintolat';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element= { <Login /> } />
        <Route path="/Ravintolat" element= { <Ravintolat /> } />
      </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
