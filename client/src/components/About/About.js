import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./About.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <div className="back">
      <Navbar />
      <div className="container about">
        <div>
          <p>
            We believe that travel is for everyone. It helps us learn about
            ourselves and the world around us.
          </p>
        </div>
        <div>
          <p>
            Our goal is to help more people from more backgrounds experience the
            joy of exploration. Because we believe this builds a kinder, more
            inclusive, more open-minded world.
          </p>
        </div>
        <div>
          <p>
            Like you, travel is in our DNA. At Lonely Planet, we believe travel
            opens the door to the greatest, most unforgettable experiences life
            can offer. And we have learned that the best travel is about putting
            yourself out there, about leaving behind the everyday, about
            immersing yourself, rather than just seeing the sights.
          </p>
        </div>
      </div>
      <div className="container aboutCard">
        <div class="card wheretocard" style={{ marginLeft: "20%" }}>
          <p>
            We know travel has a social, economic and environmental
            consequences. We must equip travelers with the knowledge to make
            informed choices about their impact, and inspire them to travel with
            generosity.
          </p>
        </div>

        <div class="card wheretocard" >
          <p>
            We believe travel is ultimately about joy and delight. And the
            planning process should be that too.
          </p>
        </div>

        <div class="card wheretocard" >
          <p>
            We pursue a vision of the world in which all are welcome. We believe
            travel can help foster the connection and understanding that makes
            meaningful moments possible.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
