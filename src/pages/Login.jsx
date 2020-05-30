import React, { useEffect, useState } from "react";
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBAlert } from "mdbreact";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { LoginUser, errormessageclear } from "../redux/actions";

const Login = (props) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const onChangeData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const onLoginUser = (event) => {
    event.preventDefault();
    props.LoginUser(data);
  };

  if (props.Auth.isLogin) {
    return <Redirect to="/" />;
  }
  return (
    <div className="d-flex justify-content-center align-items-center container_login border ">
      <div className="Register">
        <MDBCard>
          <MDBCardBody>
            <form>
              <p
                className="h4 text-center py-4"
                style={{ color: "black", fontSize: 35 }}
              >
                Login
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
                  onChange={onChangeData}
                  name="username"
                />

                <MDBInput
                  label="Password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  onChange={onChangeData}
                  name="password"
                />
              </div>
              <div>
                <p style={{ color: "black" }}>
                  Dont Have An Account?{" "}
                  <a style={{ color: "blue" }}>
                    <Link to="/register">Register</Link>
                  </a>
                </p>
              </div>
              <div className="text-center py-4 mt-3">
                {props.Auth.errormessage ? (
                  <MDBAlert color="danger">
                    {props.Auth.errormessage}{" "}
                    <span
                      className="float-right hovererr font-weight-bold"
                      onClick={() => props.errormessageclear()}
                    >
                      X
                    </span>
                  </MDBAlert>
                ) : null}
                <MDBBtn color="primary" type="submit" onClick={onLoginUser}>
                  Login
                </MDBBtn>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Auth: state.Auth,
  };
};

export default connect(mapStateToProps, { LoginUser, errormessageclear })(
  Login
);
