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
    case "updateWarehouse":{
      return {
        ...state,
        warehouseContract: action.warehouseContract,
      };
    }
    case "updateFactory":{
      return {
        ...state,
        factoryContract: action.factoryContract,
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
