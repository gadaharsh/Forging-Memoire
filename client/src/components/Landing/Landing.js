import "./Landing.css";
import sample from "../Explore.mp4";
// import Button from "react-bootstrap/Button";s
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="Landing">
        {/* <video loop autoPlay muted id="myVideo">
        <source src="Explore.mp4" type="video/mp4" />
      </video> */}

        <video
          id="myVideo"
          className="background-video videoTag"
          autoPlay
          loop
          muted
        >
          <source src={sample} type="video/mp4" />
        </video>
        <div className="content">
          <div class="panel pink">
            <Link to="/home">
              <button style={{ cursor: "pointer" }}>Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;

import './Landing.css';
import sample from '../Explore.mp4';
import Button from 'react-bootstrap/Button';
function Landing() {
    return (
        <>
            <div className="Landing">
                {/* <video loop autoPlay muted id="myVideo">
        <source src="Explore.mp4" type="video/mp4" />
      </video> */}

                <video id="myVideo" className='background-video videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
                <div className="content">
                    <div class="panel pink">
                        <a href="/home">
                            <button className="button">Get Started</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
