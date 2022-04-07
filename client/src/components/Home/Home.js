import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Home.scss";
import Navbar from "../Navbar/Navbar";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
  useNavigate,
} from "react-router-dom";
// import * as mdb from 'mdb-ui-kit';

function Home() {
  return (
    <>
      <Navbar />
      <div className="Home">
        <div className="flex-container">
          <div className="tropical image-hoverable"></div>
          <div className="cold image-hoverable"></div>
          {/* <div className="pnw"></div> */}
          <div className="desert image-hoverable"></div>
          <div className="container pt-2 px-5 d-flex justify-content-center centered">
            <h1 className="title">Discover story-worthy travel moments</h1>
          </div>
        </div>
        <div
          className="container pt-5
         planSection "
        >
          <div class="row">
            <div class="col-9">
              {" "}
              <div className="container planChild" id="plantrip">
                <p className="plan">Plan Your Trip</p>
                <div className="box1 d-flex justify-between items-center ">
                  <h2 className="whereto text-2xl md:text-4xl font-display leading-tight font-semibold mb-8 lg:mb-16 d-inline">
                    Where to next?
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div className="container pt-4 planChild">
                <Link
                  to="/home"
                  className="destinationbutton btn  lg:inline mb-4"
                >
                  View all destinations
                </Link>
              </div>
            </div>
            {/* <div class="w-100"></div>
    <div class="col">col</div>
    <div class="col">col</div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
