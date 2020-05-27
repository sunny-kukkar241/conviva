import React from 'react';
import { connect } from 'react-redux';
import { fetchCustomers } from "../../actions";
import Customer from "./Customer";


class CustomerList extends React.Component {
    state = { selected : "" };

    componentDidMount() {
        this.props.fetchCustomers();
    }
    handleClick = (customerId) => {
        this.setState({selected : customerId });
        this.props.onCustomerClick(customerId);    
    };
   
    renderCustomersList(){
        return this.props.customers.map(customer => {
            return (
                <div className={`item customerdetail`} 
                    style={{ backgroundColor: this.state.selected === customer.id ? "darkseagreen" : ""}} 
                    key={customer.id} 
                    onClick={() => this.handleClick(customer.id) } >
                    <Customer key={customer.id} customer={customer}  />
                </div>
                
            );
        });
    }

    render() {
        //console.log(this.props.customers);
        return(
            <div className={"customerlist"}>
                {this.renderCustomersList()}
            </div>  
        );
    }

}

const mapStateToProps = (state) => {
    return { customers: state.customers };
};

export default connect(mapStateToProps, { fetchCustomers })(CustomerList);
