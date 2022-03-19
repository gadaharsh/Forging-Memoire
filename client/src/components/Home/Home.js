import './Home.css';

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
       
            </div>
      
        </>
    )
}
export default Home;