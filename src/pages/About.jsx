import React, { useState, useEffect } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact";
import { Link } from "react-router-dom";

const About = () => {
  const [image, setimage] = useState({
    photos: [
      "../assets/image3.jpg",
      "../assets/image2.jpg",
      "../assets/image1.jpg",
    ],
  });

  return (
    <div className="containers2">
      <div className="About_1 d-flex justify-content-start align-items-center">
        <div className="p-2">
          <h1
            className="mb-5"
            style={{ color: "lightblue", backgroundColor: "black" }}
          >
            THE BEST IN TOWN
          </h1>
          <h5
            style={{
              backgroundColor: "black",
              color: "white",
              width: "60vh",
              // display: "block",
            }}
          >
            {" "}
            We are by far the most advanced coffee roastery at Eastern of
            Indonesia.Fully dedicated in coffee research and technlogy
            advancement in coffee territory.We have the best coffee beans and
            roasted with best method. So dont doubt our coffee and give it a
            shot !
          </h5>
        </div>
      </div>
      <div className="About2 d-flex justify-content-center align-items-center">
        <div className="p-2">
          <h1
            className="mb-5"
            style={{ color: "lightblue", backgroundColor: "black" }}
          >
            Fast Delivery
          </h1>
          <h5
            style={{
              backgroundColor: "black",
              color: "white",
              width: "60vh",
              // display: "block",
            }}
          >
            {" "}
            We have our delivery service ready 24/7 ,so what do you waiting for
            order now !
          </h5>
          <Link to="/shop">
            <button className="btn btn-primary">SHOP</button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
