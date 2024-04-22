const initialState = {
  transactionsData: []
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactionsData: [...state.transactionsData, action.payload]
      };
    default:
      return state;
  }
};

export default transactionsReducer;
