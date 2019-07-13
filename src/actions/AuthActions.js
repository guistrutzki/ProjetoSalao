import { verifyLogin, makeLogin, makeSignUp, makeForgot } from "../FirebaseDB";

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

export const setNameField = name => {
  return {
    type: "setNameField",
    payload: {
      name
    }
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

export const doLogin = (email, password) => {
  return dispatch => {
    makeLogin(email, password)
      .then(status => {
        if (status == 2) {
          alert("E-mail e ou senha errados!");
        }
        dispatch({
          type: "changeStatus",
          payload: {
            status
          }
        });
      })
      .catch(() => {
        alert("Tente novamente mais tarde.");
      });
  };
};

export const doSignUp = (name, email, password) => {
  return dispatch => {
    makeSignUp(email, password)
      .then(status => {
        if (status == 2) {
          alert("E-mail já está cadastrado!");
        }
        dispatch({
          type: "changeStatus",
          payload: {
            status
          }
        });
      })
      .catch(() => {
        alert("Tente novamente mais tarde.");
      });
  };
};

export const doForgot = email => {
  return dispatch => {
    makeForgot(email)
      .then(status => {
        alert("Enviamos um e-mail de redefinição de senha.");
      })
      .catch(() => {
        alert("Tente novamente mais tarde.");
      });
  };
};
