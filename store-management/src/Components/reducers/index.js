import { combineReducers } from 'redux';
import transactionsReducer from './transactionsReducer';
import inventoryReducer from './inventoryReducer';
import customerReducer from './customerReducer'; 

const rootReducer = combineReducers({
  transactions: transactionsReducer,
  inventory: inventoryReducer,
  customers: customerReducer 
});

export default rootReducer;


