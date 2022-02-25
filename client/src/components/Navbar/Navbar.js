import './Navbar.scss';
function Navbar() {
    return (
        <>
            <header>
                <div className="header">
                    <nav className="navigation">
                        <a href="#" className="navbar-logo">Logo</a>
                        <div className="navbar-right">
                            <a href="#">About</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact</a>
                        </div>
                    </nav>
                    <div className=" p-0 container">
                        <div className="row">
                            <div className="col-4">
                                <div className="box">
                                    <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" className="img-responsive bg-img" alt="Cloudy Sky" />
                                </div>
                                {/* <div className="tagline-right"> */}
                                {/* <div className="tagline-right-text">The future is for workers</div> */}
                                {/* <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" className="img-responsive bg-img" alt="" /> */}
                                {/* </div> */}
                            </div>
                            <div className="col-4">
                                <div className="box">
                                    <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" className="img-responsive bg-img" alt="Cloudy Sky" />
                                </div>
                                {/* <div className="tagline-right"> */}
                                {/* <div className="tagline-right-text">The future is for workers</div> */}
                                {/* <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" className="img-responsive bg-img" alt="" /> */}
                                {/* </div> */}
                            </div>
                            <div className="col-4">
                                <div className="box">
                                    <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" className="img-responsive bg-img" alt="Cloudy Sky" />
                                </div>
                                {/* <div className="tagline-right"> */}
                                {/* <div className="tagline-right-text">The future is for workers</div> */}
                                {/* <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" className="img-responsive bg-img" alt="" /> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="video-container">
                        <video autoplay loop muted id="video-bg">

                            <source src="http://bigcom.com/assets/2014/08/iChooseB.mp4" type="video/mp4" />

                        </video>
                    </div> */}
                </div>
            </header>
            {/* <div className="portfolio-section">
                <div className="tagline-left">
                    <div className="tagline-left-text">Serving the waters that serve our state.</div>
                    <video autoplay muted loop className="tagline-video">
                        <source src="http://www.bigcom.com/assets/2014/10/asmc_bg2.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="tagline-right">
                    <div className="tagline-right-text">The future is for workers</div>
                    <video autoplay muted loop className="tagline-video">
                        <source src="http://www.bigcom.com/assets/2014/08/GoBuildAlabama.mp4" type="video/mp4" />
                    </video>
                </div>
            </div> */}
        </>
    )
}
export default Navbar;