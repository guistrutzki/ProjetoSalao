import { verifyLogin } from "../FirebaseDB";

export const checkLogin = () => {
  return dispatch => {
    verifyLogin()
      .then(status => {
        dispatch({
          type: "changeStatus",
          payload: {
            status
          }
        });
      })
      .catch(() => {
        dispatch({
          type: "changeStatus",
          payload: {
            status: 2
          }
        });
      });
  };
};

export const setEmailField = email => {
  return {
    type: "setEmailField",
    payload: {
      email
    }
  };
};

export const setPasswordField = password => {
  return {
    type: "setPasswordField",
    payload: {
      password
    }
  };
};
