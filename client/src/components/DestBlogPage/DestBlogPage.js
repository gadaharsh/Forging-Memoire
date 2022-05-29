import "./DestBlogPage.scss";
import React, { useState, useEffect } from "react";
import { Form, Alert, FormInput } from "react-bootstrap";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Map, { Marker } from "react-map-gl";
import Data from "./coordinates.json";

import "mapbox-gl/dist/mapbox-gl.css";

function DestBlogPage() {
  let navigate = useNavigate();
  const [location, setLocation] = useState({});
  const [coordinates, setCoordinates] = useState({});
  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  let { id } = useParams();
  // const [viewport, setViewport]= useState({
  //     latitude:30,
  //     longitude:-120,
  //     zoom:8,
  //     width: 400,
  //     height: 400,
  //     width:window.innerWidth,
  //     height:window.innerHeight,

  // });

  const getCoordinates = () => {
    Data.forEach(function (item) {
      if (item.state == location.statenames) {
        setLatitude(item.latitude);
        setLongitude(item.longitude);
      }
    });
  };

  useEffect(() => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/blogs/" + id,
    })
      .then((data) => {
        // history.push("/")
        setLocation(data.data);
        console.log(data.data);
        console.log("location", location);
      })
      // .then(data => this.setState({ postId: data.id }))
      .catch((error) => {
        setError("No Locations found");
        setTimeout(() => {
          setError("");
        }, 5000);
      });
  }, []);
  useEffect(() => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/blogs/coordinates",
    })
      .then((data) => {
        // history.push("/")
        setCoordinates(data.data);
        console.log(data.data);
        console.log("coordinates", coordinates);
      })
      // .then(data => this.setState({ postId: data.id }))
      .catch((error) => {
        setError("No Locations found");
        setTimeout(() => {
          setError("");
        }, 5000);
      });
  }, []);

  // useEffect(() => {
  //   getCoordinates()
  //   console.log(longitude);
  // }, [])

  return (
    <>
      <Navbar />
      <div className="destpage">
        <div className="flex-container">
          <div id="blog-image"></div>
        </div>
        <div className="container info-div">
          {/* <div class="pageOverview_bg-block__i2CPt lg:-mt-28"></div> */}
          <nav class="pt-5 mt-2 w-full pr-11 lg:pr-0" aria-label="Breadcrumbs">
            <ol
              className="p-1"
              itemscope=""
              itemtype="http://schema.org/BreadcrumbList"
            >
              <li
                class="font-semibold d-inline"
                data-testid="breadcrumb"
                itemscope=""
                itemprop="itemListElement"
                itemtype="http://schema.org/ListItem"
              >
                <a
                  href="/north-america"
                  class="link-underline transition-colors ease-out cursor-pointer text-black hover:text-blue"
                  itemprop="item"
                  id="north-america"
                  aria-hidden="true"
                >
                  <span itemprop="name">Asia</span>
                </a>
                <meta itemprop="position" content="1" />
                <span class="px-2" aria-hidden="true">
                  /
                </span>
              </li>
              <li
                class="font-semibold d-inline"
                data-testid="breadcrumb"
                itemscope=""
                itemprop="itemListElement"
                itemtype="http://schema.org/ListItem"
              >
                <a
                  href="/usa"
                  class="link-underline transition-colors ease-out cursor-pointer text-black hover:text-blue"
                  itemprop="item"
                  id="usa"
                  aria-hidden="true"
                >
                  <span itemprop="name">India</span>
                </a>
                <meta itemprop="position" content="2" />
                <span class="px-2" aria-hidden="true">
                  /
                </span>
              </li>
              <li
                class="font-semibold d-inline"
                data-testid="breadcrumb"
                itemscope=""
                itemprop="itemListElement"
                itemtype="http://schema.org/ListItem"
              >
                <a
                  href="/usa/new-york-state"
                  class="link-underline transition-colors ease-out cursor-pointer text-black hover:text-blue"
                  itemprop="item"
                  id="usa/new-york-state"
                  aria-hidden="true"
                >
                  <span itemprop="name">{location.statenames}</span>
                </a>
                <meta itemprop="position" content="3" />
              </li>
            </ol>
          </nav>
          <h1 className="py-1 info-title text-3xl font-display md:text-6xl leading-tighter font-semibold font-bold text-blue mb-6 lg:mb-8">
            {location.statenames}
          </h1>
          <p className="py-2 info-intro">{location.ataglimse}</p>
          <h2 className="info-subheading">
            <span style={{ fontWeight: "200" }}>
              <strong>Capital: </strong>
            </span>
            <span style={{ fontWeight: "500", color: "rgb(75, 75, 214)" }}>
              {location.cap}
            </span>
          </h2>
          <p className="mt-3 info-para">{location.statetourism}</p>

          <p className="mt-3 info-para">{location.gettingaround}</p>

          <p className="mt-3 info-para">
            <strong>How to reach:</strong> {location.howtoreach}
          </p>

          <p className="mt-3 info-para">
            <strong>Tourist Attractions:</strong> {location.touristatt}
          </p>

          <p className="mt-3 info-para">
            <strong>Best Time to Visit:</strong> {location.besttime}
          </p>

          <p className="mt-3 info-para">
            <strong>Regions: </strong>
            {location.reg}
          </p>
        </div>
        <div className="container map">
          <Map
            initialViewState={{
              longitude: 77.299492,
              latitude: 30.172716,
              zoom: 14,
            }}
            style={{ width: 600, height: 400 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={
              "pk.eyJ1IjoibWluaXByb2plY3RtaGEiLCJhIjoiY2wzbmR1NGF4MDNmcTNqcWRwYzg2aHo5aSJ9.bDU-fsoy9g3x9rm7n4RafA"
            }
          >
            <Marker longitude={77.299492} latitude={30.172716} color="red" />
            <Marker longitude={77.384117} latitude={27.897551} color="red" />
            <Marker longitude={77.332024} latitude={28.148735} color="red" />
            <Marker longitude={76.693245} latitude={29.138407} color="red" />
            <Marker longitude={76.119247} latitude={29.592957} color="red" />
            <Marker longitude={76.606613} latitude={28.895515} color="red" />
            <Marker longitude={75.025505} latitude={29.536535} color="red" />
            <Marker longitude={75.455215} latitude={29.511778} color="red" />
            <Marker longitude={76.990547} latitude={29.685629} color="red" />
            <Marker longitude={76.977081} latitude={29.398928} color="red" />
            <Marker longitude={76.919998} latitude={28.68} color="red" />
            <Marker longitude={76.817825} latitude={29.962072} color="red" />
            <Marker longitude={76.316666} latitude={29.316668} color="red" />
            <Marker longitude={76.854172} latitude={30.695202} color="red" />
            <Marker longitude={76.776695} latitude={30.37818} color="red" />
            <Marker longitude={76.101479} latitude={28.065796} color="red" />
            <Marker longitude={76.816902} latitude={30.642803} color="red" />
            <Marker longitude={77.091492} latitude={28.928574} color="red" />
            <Marker longitude={76.878281} latitude={29.969513} color="red" />
            <Marker longitude={75.965996} latitude={29.102377} color="red" />
            <Marker longitude={76.133514} latitude={28.799046} color="red" />
            <Marker longitude={76.39772} latitude={29.121574} color="red" />
            <Marker longitude={77.026344} latitude={28.457523} color="red" />
          </Map>
        </div>
      </div>
      {/* </div> */}
      {/* <script>
            document.getElementById('the_body').style.backgroundImage = "something.gif"
        </script> */}
    </>
  );
}
export default DestBlogPage;
