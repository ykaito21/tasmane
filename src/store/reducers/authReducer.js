const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("error");

      return {
        ...state,
        authError: action.err.message
      };
    case "LOGIN_SUCCESS":
      console.log("success");

      return {
        ...state,
        authError: null
      };

    case "SIGUOUT_SUCCESS":
      console.log("logout");
      return state;

    case "SIGNUP_ERROR":
      console.log("error");
      return {
        ...state,
        authError: action.err.message
      };

    case "SIGNUP_SUCCESS":
      console.log("success");
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};

export default authReducer;
