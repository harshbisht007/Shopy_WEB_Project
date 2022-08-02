import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {registerStart, registerSuccess , registerFailure} from "./userRedux1"
import { publicRequest } from "../requestMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("https://gauarv-server.herokuapp.com/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("https://gauarv-server.herokuapp.com/api/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};