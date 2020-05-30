import React, { useEffect, useState } from "react";
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBAlert } from "mdbreact";
import { API_URL } from "../supports/ApiUrl";
import Axios from "axios";
import { connect } from "react-redux";
import { RegisterUser, errormessageclear } from "../redux/actions";

const Register = (props) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const onChangeData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.RegisterUser(data);
    console.log(props.Auth.errormessage);
  };

  return (
    <div className="d-flex justify-content-center align-items-center container_login ">
      <div className="Register">
        <MDBCard>
          <MDBCardBody>
            <form>
              <p
                className="h4 text-center py-4"
                style={{ color: "black", fontSize: 35 }}
              >
                Register
              </p>
              <div className="grey-text">
                <MDBInput
                  label="Username"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="username"
                  onChange={onChangeData}
                />
                <MDBInput
                  label="Email"
                  icon="envelope"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="email"
                  onChange={onChangeData}
                />

                <MDBInput
                  label="Password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  name="password"
                  onChange={onChangeData}
                />
                <MDBInput
                  label="Confirm Password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  name="confirmpassword"
                  onChange={onChangeData}
                />
              </div>

              <div className="text-center py-4 mt-3">
                {props.Auth.errormessage ? (
                  <MDBAlert color="danger">
                    {props.Auth.errormessage}{" "}
                    <span
                      className="float-right hover err font-weight-bold"
                      onClick={() => props.errormessageclear()}
                    >
                      X
                    </span>
                  </MDBAlert>
                ) : null}
                <MDBBtn color="primary" type="submit" onClick={onSubmit}>
                  Register
                </MDBBtn>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

const mapStateToProps = ({ Auth }) => {
  return {
    Auth,
  };
};

export default connect(mapStateToProps, { RegisterUser, errormessageclear })(
  Register
);
