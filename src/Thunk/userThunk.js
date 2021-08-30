import { setLoginUser, showLogUserAction } from "../Redux/Actions/usersAction";
import { signupUserAction } from "../Redux/Actions/usersAction";
import UserService from "../Services/UserService";

export const signupUser = (data) => async (dispatch) => {
  try {
    const res = await UserService.signup(data);
    dispatch(signupUserAction(res.data));
  } catch (err) {
    alert(err);
  }
};

export const loginUser = (data) => async (dispatch) => {
  try {
    const res = await UserService.login(data);
    dispatch(setLoginUser(res.data));
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const showLogUser = (token) => async (dispatch) => {
  try {
    const res = await UserService.getshowLogUser(token);
    dispatch(showLogUserAction(res.data));
  } catch (err) {
    alert(err);
  }
};
