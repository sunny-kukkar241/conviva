const factory = {
  getCustomerAddress
};

function getCustomerAddress(req, data){
  var json_data = JSON.parse(data);
  filteredData = json_data.filter(customer => customer.customerid === req.params.customerId);
  return filteredData;
}


module.exports = factory;
