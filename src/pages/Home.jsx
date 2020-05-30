import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Axios from "axios";
import { connect } from "react-redux";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import { API_URL } from "../supports/ApiUrl";
import { Link } from "react-router-dom";

const Home = ({ Auth }) => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    Axios.get(`${API_URL}/product/getproduct`)
      .then((res) => {
        setItem(res.data);

        console.log(Auth.isLogin);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderCard = () => {
    return items.map((val, index) => {
      return (
        <div className="p-2  ">
          <MDBCol>
            <MDBCard style={{ width: "20vh" }} className="md-4 card_edit">
              <MDBCardImage
                className="settingImage"
                src={val.imagePath}
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>{val.name}</MDBCardTitle>
                <MDBCardText>{val.deskripsi}</MDBCardText>
                <Link to={`productdetail/${val.idproduct}`}>
                  <MDBBtn>Beli</MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
      );
    });
  };

  return (
    <div className="containers">
      <Jumbotron className="d-flex justify-content-start align-items-center text-center jumbotron_home">
        <div className="p-2">
          <h1
            className="mb-5"
            style={{ color: "lightblue", backgroundColor: "black" }}
          >
            Aristotle Roastery
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
            Aristotle Roastery team is made up of coffee and research
            professionals with decades of experience, along with an advisory
            network of various experts (e.g., analytical chemistry, water
            chemistry, refractometry, food science, physics). We simply love
            coffee and want to use our skill sets to help provide the community
            with quality data assessing various devices, methods, and claims.
          </h5>
        </div>
        <p>{/* <Button variant="primary">Learn more</Button> */}</p>
      </Jumbotron>
      <div className="container1 d-flex flex-column justify-content-center align-items-center">
        <div className="p-2">
          <h2 style={{ color: "white" }}>
            Fresh Coffee to Spark your Creativity.
          </h2>
        </div>
        <div className="p-2 ">
          <h5 style={{ color: "white" }}>
            Our mission is to operate a sustainable retail specialty coffee shop
            and wholesale coffee roasting business in order to serve people and
            positively contribute to our local community and our partner
            coffee-growing communities.
          </h5>
        </div>
      </div>
      <div className="container2 d-flex flex-column  justify-content-center align-items-center ">
        <div
          className="detail_content  "
          style={{ color: "tomato", fontSize: 40 }}
        >
          Our Best Coffee Beans
        </div>
        <div className="content-box d-flex flex-row justify-content-between align-items-center ">
          {renderCard()}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ Auth }) => {
  return {
    Auth,
  };
};

export default connect(mapStateToProps)(Home);
