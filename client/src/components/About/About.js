import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function About() {
  return (
    <div className="back">
    <Navbar/>
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
      <Footer/>
    </div>
  );
}

export default About;
