import { userConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from "./alert.actions";
import { history } from "../_helpers";

const login = (username, password) => {
  const request = (user) => {
    return {
      type: userConstants.LOGIN_REQUEST,
      user,
    };
  };
  const success = (user) => {
    return {
      type: userConstants.LOGIN_SUCCESS,
      user,
    };
  };
  const failure = (error) => {
    return {
      type: userConstants.LOGIN_FAILURE,
      error,
    };
  };

  return (dispatch) => {
    dispatch(request({ username }));

    userService
      .login(username, password)
      .then((user) => {
        dispatch(success(user));
        history.push("/");
      })
      .catch((error) => console.log(error));
  };
};

export const userActions = { login };
