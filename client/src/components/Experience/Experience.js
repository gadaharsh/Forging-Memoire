import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Experience.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

function Experience() {
  return (
    <div className="backE">
      <Navbar />
      <div className="container aboutE">
        <div>
          <p>
            We want our users to share their experience with fellow travellers.
            This will helps us make this community even stronger.
          </p>
        </div>

        <div className="soon">
          <p>Coming Soon ...</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Experience;
