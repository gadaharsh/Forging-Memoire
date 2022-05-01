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
import { Button } from "react-bootstrap";
import LocationCard from "../LocationCard/LocationCard";
import Footer from "../Footer/Footer";
// import * as mdb from 'mdb-ui-kit';

const imageLocation1="https://images.unsplash.com/photo-1601961405399-801fb1f34581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
const imageLocation2="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
const imageLocation3="https://images.unsplash.com/photo-1589041127168-9b1915731dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

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
          <div className="container pt-2 px-5 d-flex justify-content-center centered" id="titlecont">
            <h1 className="title">Discover story-worthy travel moments</h1>
          </div>
        </div>
        <div className="container pt-5 planSection ">
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
                {/* <Link
                  to="/home"
                  className="destinationbutton btn  lg:inline mb-4"
                > */}
                  <Button href="/blogs" className="destinationbutton">View all destinations</Button>
                  
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div class="row container">
            <LocationCard image={imageLocation1} location="Mumbai"/>
            <LocationCard image={imageLocation2} location="Kashmir"/>
            <LocationCard image={imageLocation3} location="Kolkata"/>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
export default Home;
