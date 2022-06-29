const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT": {
      return {
        ...state,
        darkMode: false,
      };
    }
    case "DARK": {
      return {
        ...state,
        darkMode: true,
      };
    }
    case "TOGGLE": {
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }
    case "setMetask":{
      return {
        ...state,
        metaMask: action.data,
      };
    }
    case "updateContract":{
      return {
        ...state,
        myContract: action.myContract,
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
