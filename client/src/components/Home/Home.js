import './Home.scss';
// import * as mdb from 'mdb-ui-kit';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function Home() {
    return (
        <>
            <div className="Home">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/* 
                    <div id="myCarousel" className="carousel carousel-fade slide" data-ride="carousel" data-interval="3000">
                        <div class="carousel-inner" role="listbox">
                            <div class="item active background a"></div>
                            <div class="item background b"></div>
                            <div class="item background c"></div>
                        </div>
                    </div>

                    <div class="covertext">
                        <div class="col-lg-10" style="float:none; margin:0 auto;">
                            <h1 class="title">ELINE</h1>
                            <h3 class="subtitle">A Tidy, Clean, Easy-to-Use, and Responsive Landing Page Template</h3>
                        </div>
                        <div class="col-xs-12 explore">
                            <a href="#"><button type="button" class="btn btn-lg explorebtn">EXPLORE</button></a>
                        </div>
                    </div> */}


                <div className="flex-container">
                    <div className="tropical"></div>
                    <div className="cold"></div>
                    {/* <div className="pnw"></div> */}
                    <div className="desert"></div>
                </div>

            </div>

            {/* <div className="about">
   <h2>Main Description</h2>
   <p>Roll on the floor purring your whiskers off intrigued by the shower burrow under covers, and play time, rub face on everything, intently sniff hand, or pelt around the house and up and down stairs chasing phantoms. Attack feet. Damn that dog shake treat bag under the bed drink water out of the faucet for lick butt love to play with owner's hair tie. Swat at dog give attitude.</p>
</div> */}





            {/* <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">

                <div className="container-fluid">

                    <a className="navbar-brand" href="#">Brand</a>


                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Another action</a>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
                                >Disabled</a>
                            </li>
                        </ul>

                    </div>

                </div>

            </nav>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="box">
                            <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" className="img-fluid bg-img" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="box">
                            <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" className="img-fluid bg-img" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="box">
                            <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" className="img-fluid bg-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        </>
    )
}
export default Home;