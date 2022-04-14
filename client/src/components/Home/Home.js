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
                  <Button className="destinationbutton">View all destinations</Button>
                  
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div class="row">
            <div className="col-4">
              <div class="card wheretocard" style={{width: "25rem"}}>
                <img class="card-img-top wheretocardimg" src="https://images.unsplash.com/photo-1547994770-e5d8509b114d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">Mumbai</h5>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card wheretocard" style={{width: "25rem"}}>
                <img class="card-img-top wheretocardimg" src="https://images.unsplash.com/photo-1547994770-e5d8509b114d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">Mumbai</h5>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card wheretocard" style={{width: "25rem"}}>
                <img class="card-img-top wheretocardimg" src="https://images.unsplash.com/photo-1547994770-e5d8509b114d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">Mumbai</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="websitebanner d-flex justify-content-center align-items-end">
          <div class="relative lg:absolute lg:bottom-32 lg:left-0 lg:right-0 mx-auto z-10 md:max-w-2xl lg:max-w-3xl lg:flex lg:justify-between text-center lg:text-left"><p class="text-white text-center lg:text-left text-lg lg:w-4/6">The results are in! Explore this year’s expert-approved list of must-see destinations, places, and unforgettable experiences guaranteed to inspire.</p><div class="flex flex-col items-center pb-16 lg:pb-0"><a href="https://www.lonelyplanet.com/best-in-travel" class="btn inline-block mt-10 lg:mt-0 mb-6 bg-white text-black flex-shrink-0" aria-hidden="true">Discover the Winners</a><button class="text-white text-sm underline" type="button">How we choose</button></div></div>
        </div>
      </div>
    </>
  );
}
export default Home;
