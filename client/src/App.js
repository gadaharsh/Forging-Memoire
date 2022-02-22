import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (

    <div className="App">
      <Switch>
        <Route exact path="/"><Landing></Landing></Route>
        <Route exact path="/home"><Home></Home></Route>
      </Switch>
    </div>

  );
}

export default App;
