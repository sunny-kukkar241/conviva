import React from 'react';
import { Row, Col, Divider } from "antd";
import CustomerAddressList from "./CustomerAddressList";
import CustomerList from "./CustomerList";
import './customers.css';

class Customers extends React.Component {
    state = { selectedCustomerId : null };
   
 
    onSelectCustomer = (customerId) => {
        this.setState({selectedCustomerId : customerId  });
    }

    render() {
       // console.log(this.props.customers);
        return(
            <div className="contents">
                <Row className={"row"} gutter={16}>
                    <Col className={"gutter-row"} xs={{span:12}} md={{span:10}} offset={2}>
                        <CustomerList onCustomerClick={this.onSelectCustomer} />  
                    </Col>
                    <Col className={"gutter-row"} xs={{span:12}} md={{span:10}} >
                        <CustomerAddressList customerId={this.state.selectedCustomerId} />
                    </Col>
                </Row>
            </div>
        );
    }
}


export default Customers;
