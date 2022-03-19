import './App.css';

import Button from 'react-bootstrap/Button';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Navbar from './components/Navbar/Navbar'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/"><Landing></Landing></Route>
          <Route exact path="/home"><Home></Home></Route> */}
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
