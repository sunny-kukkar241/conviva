import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Divider } from "antd";
import { fetchCustomerAddress } from "../../actions";
import CustomerAddress from "./CustomerAddress";

class CustomerAddressList extends React.Component {
    componentDidMount(){
        this.props.fetchCustomerAddress(this.props.customerId);
    }

    componentDidUpdate(prevProps){
        if(this.props.customerId !=  prevProps.customerId) {
            this.props.fetchCustomerAddress(this.props.customerId);
        }
        
    }

    renderAddressList(){
        
       let filteredData = this.props.address.filter(address => parseInt(address.customerid) === parseInt(this.props.customerId));
       if((!filteredData) || filteredData.length === 0){
           return (
               <div className="no-item">
                   Either customer is not selected or no address data available for selected customer!
               </div>
           );
       }
       
       return filteredData.map(address => {
            return (
                <div className="item" key={address.id} >
                    <CustomerAddress address={address} />
                    <Divider style={{backgroundColor:"black"}} />
                </div>  
            );
        });
    }

    render() {
      
        return (
            <div className={"customerAddressList"}>
                <h2 className={"addressListHeading"} >Addresses of selected customer</h2>
               {this.renderAddressList()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { 
        address : state.address
    };
    
};

export default connect(mapStateToProps,{ fetchCustomerAddress })(CustomerAddressList);