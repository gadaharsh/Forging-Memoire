import logo from './logo.svg';
import './App.css';
import sample from './Explore.mp4';
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div className="App">
      {/* <video loop autoPlay muted id="myVideo">
        <source src="Explore.mp4" type="video/mp4" />
      </video> */}
      <button type="button" className="btn btn-success">Success</button>
      <video className='background-video videoTag' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
      </video>

    </div>
  );
}

export default App;
