import axiosConfig from '../apis/axiosConfig';

export const fetchCustomers = () => async dispatch => {
    const response = await axiosConfig.get('/customers');
    dispatch({
        type: 'FETCH_CUSTOMERS',
        payload: response.data.customers
    });
};


export const fetchCustomerAddress = (id) => async dispatch => {
    const response = await axiosConfig.get(`/address/${id}`);
    console.log(response);
    dispatch({
        type: 'FETCH_CUSTOMER_ADDRESS',
        payload: response.data
    });
};