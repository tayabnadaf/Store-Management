export const addCustomer = (customer) => ({
    type: 'ADD_CUSTOMER',
    payload: customer
  });
  
  export const deleteCustomer = (index) => ({
    type: 'DELETE_CUSTOMER',
    payload: index
  });
  