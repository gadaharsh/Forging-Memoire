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
                </div>
            </header>
        </>
    )
}
export default Navbar;