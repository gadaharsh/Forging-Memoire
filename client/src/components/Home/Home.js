// import './Home.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Home.scss';
// import * as mdb from 'mdb-ui-kit';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


function Home() {
    return (
        <>
            <div className="Home">
                <div className="flex-container">
                    <div className="tropical image-hoverable"></div>
                    <div className="cold image-hoverable"></div>
                    {/* <div className="pnw"></div> */}
                    <div className="desert image-hoverable"></div>
                </div>
                <div className="container pt-5">
                    <p className="plan">Plan Your Trip</p>
                    <div className="box1 d-flex justify-between items-center ">
                    <h2 className="whereto text-2xl md:text-4xl font-display leading-tight font-semibold mb-8 lg:mb-16 d-inline">Where to next?</h2>
                    <a href="" className="destinationbutton btn hidden lg:inline mb-4">View all destinations</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;