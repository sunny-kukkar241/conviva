export default (state=[], action) => {
    switch(action.type){
        case 'FETCH_CUSTOMER_ADDRESS':
            return  action.payload;
        default: 
            return state;     
    }
};