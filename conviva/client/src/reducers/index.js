import { combineReducers } from  'redux';
import customersReducer from './customersReducer';
import addressReducer from './addressReducer';

export default combineReducers({ 
    customers: customersReducer,
    address: addressReducer
});
