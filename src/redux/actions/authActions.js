import { API_URL } from "../../supports/ApiUrl";
import Axios from "axios";
import {
  USER_LOGIN_FAILED,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
} from "./type";

export const RegisterUser = ({
  username,
  email,
  password,
  confirmpassword,
}) => {
  return (dispatch) => {
    dispatch({ type: USER_LOGIN_START });
    if (
      username === "" ||
      password === "" ||
      confirmpassword === "" ||
      email === ""
    ) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: "Ada Input Yang Kosong",
      });
    } else if (password !== confirmpassword) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: "Password dan confirm password tidak sama",
      });
    } else {
      let data = {
        username,
        password,
        email,
      };
      Axios.post(`${API_URL}/users/addusers`, data)
        .then((result) => {
          if (result.data.status) {
            console.log(result.data);
            localStorage.setItem("token", result.data.idusers);
            dispatch({
              type: USER_LOGIN_SUCCESS,
              payload: result.data,
              countCart: 0,
            });
          } else {
            dispatch({
              type: USER_LOGIN_FAILED,
              payload: "username" + " " + username + " " + "sudah ada",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
};

export const LoginUser = ({ username, password }) => {
  return (dispatch) => {
    dispatch({ type: USER_LOGIN_START });
    if (username === "" || password === "") {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: "Salah satu kotak input kosong",
      });
    } else {
      Axios.get(`${API_URL}/users/getusers`, {
        params: {
          username,
          password,
        },
      })
        .then((res) => {
          console.log(res.data.status);
          if (res.data) {
            console.log(res.data);
            localStorage.setItem("token", res.data.idusers);
            dispatch({
              type: USER_LOGIN_SUCCESS,
              payload: res.data,
            });
          } else {
            console.log("masuk");
            dispatch({
              type: USER_LOGIN_FAILED,
              payload: "username atau password salah",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: USER_LOGIN_FAILED, payload: err.message });
        });
    }
  };
};

export const errormessageclear = () => {
  return {
    type: "ErrorClear",
  };
};
