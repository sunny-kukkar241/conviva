import React from 'react';


const Customer = ({ customer, onCustomerClick }) => {
    const [selectedItem, setSelectedItem] = React.useState("notselected");

    const handleClick = (customerId) => {
       
        setSelectedItem("selected-customer");
        onCustomerClick(customerId);
       
         
    };


    return (
        <div>
            <i className="large middle aligned icon user" />
            <div className="content">
                <div className="description">
                    <h2>{customer.name}</h2>
                    <p>{customer.age} | {customer.sex}</p>
                </div>
            </div>         
        </div>
    );
};

export default Customer;