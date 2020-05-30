import {
  USER_LOGIN_FAILED,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
} from "../actions/type";

const INITIAL_STATE = {
  username: "",
  password: "",
  token: "",
  email: "",
  errormessage: "",
  countCart: null,
  isLogin: false,
  role: 0,
  id: 0,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_START:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, ...action.payload, isLogin: true };
    case USER_LOGIN_FAILED:
      return { ...state, loading: false, errormessage: action.payload };
    case "ErrorClear":
      return INITIAL_STATE;
    default:
      return state;
  }
};
