import { RESET_LOGIN_USER, SET_LOGIN_USER, SIGNUP_USER } from "../Actions";

const initialState = {
  users: [],
  token: localStorage.getItem("token"),
  _id: localStorage.getItem("_id"),
  username:localStorage.getItem("name"),
  email:localStorage.getItem("email"),
};


const Users = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        users:action.payload,
      };
    case SET_LOGIN_USER:
      return {
        ...state,
        token: action.payload.token,
        _id: action.payload._id,
        username:action.payload.name,
        email:action.payload.email,
      };
    case RESET_LOGIN_USER:
      return {
        ...state,
        token: null,
        _id: null,
        username:null
      };
    default:
      return state;
  }
};

export default Users;
