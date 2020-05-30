import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small  ">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Our Vision</h5>
            <h5>
              At Aristotle Roastery, we’re all about getting people together and
              enjoying each other’s company. We believe that what we do can
              weave a fabric of positive relationships and experiences that
              stretch from our coffee houses and out into the world
            </h5>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="github.com/fuadariqoh">Github</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.aristotleroastery.com"> Aristotle Roastery </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
