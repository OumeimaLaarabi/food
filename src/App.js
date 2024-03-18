import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { About } from './Components/pages/About';
import { Community } from './Components/pages/Community';
import { Login } from './Components/pages/Login';
import { Home } from './Components/pages/Home';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/community" element={Community} />
        <Route path="/login" element={Login} />
        </Routes>
      </div>
   
  );
}

export default App;
