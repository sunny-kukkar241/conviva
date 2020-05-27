import React from 'react';


const CustomerAddress = ({ address }) => {
    return (
        < >
            <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{address.suite}</h2>
                        <p>{address.street } | {address.city} | {address.zipcode} </p>
                    </div>
                </div>         
        </>
    );
};

export default CustomerAddress;