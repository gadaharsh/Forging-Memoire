import logo from './logo.svg';
import './App.css';
import sample from './Explore.mp4';
import Button from 'react-bootstrap/Button';
import Landing from './components/Landing'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/"><Landing></Landing></Route>
        <Route exact path="/home"><Home></Home></Route>

      </div>
    </Router>
  );
}

export default App;
