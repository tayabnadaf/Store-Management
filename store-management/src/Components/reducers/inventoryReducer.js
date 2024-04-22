const initialState = {
  products: []
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    default:
      return state;
  }
};

export default inventoryReducer;
