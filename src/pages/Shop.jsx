import React, { useEffect, useState } from "react";
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
import Axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Shop = (props) => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    Axios.get(`${API_URL}/product/getproduct`)
      .then((res) => {
        setItem(res.data);
        console.log("masuk");
        // console.log(Auth.isLogin);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderCard = () => {
    return items.map((val, index) => (
      <div className="p-2" key={index}>
        <MDBCol>
          <MDBCard
            style={{ width: "20vh" }}
            className="md-4 card_edit"
            key={index}
          >
            <MDBCardImage className="settingImage" src={val.imagePath} waves />
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
    ));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center">{renderCard()}</div>
    </div>
  );
};

const mapStateToProps = ({ Auth }) => {
  return {
    Auth,
  };
};

export default connect(mapStateToProps, {})(Shop);
