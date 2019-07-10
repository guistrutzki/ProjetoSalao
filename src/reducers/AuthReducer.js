const initialState = {
  name: "",
  email: "lala",
  password: "123",
  emailValid: false,
  passwordValid: false,
  status: 0
};

const AuthReducer = (state = initialState, action) => {
  if (action.type === "changeStatus") {
    return { ...state, status: action.payload.status };
  }

  if (action.type === "setEmailField") {
    return { ...state, email: action.payload.email };
  }

  if (action.type === "setPassword") {
    return { ...state, password: action.payload.password };
  }

  return state;
};

export default AuthReducer;
