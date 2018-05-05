module.exports = {
  create,
  list,
  reply,
};

async function create(customerId, { location, description, requiredDate, lastDate, supplierId }) {
  // TODO: create request
  return {
    id: 'created-request-id',
    customerId,
    location, 
    description, 
    requiredDate, 
    lastDate, 
    supplierId,
  };
}

async function list({ supplierId, customerId }) {
  // TODO: list requests
  return [
    {
      id: 'one-request-id',
      customerId: customerId || 'one-customer-id',
      location: 'somewhere', 
      description: 'any', 
      requiredDate: '2018-05-05 22:26:43', 
      lastDate: '2018-05-05 22:27:01', 
      supplierId: supplierId || 'one-supplier-id',
    },
    {
      id: 'another-request-id',
      customerId: customerId || 'another-customer-id',
      location: 'nowhere', 
      description: 'some', 
      requiredDate: '2018-05-05 22:26:50', 
      lastDate: '2018-05-05 22:26:57', 
      supplierId: supplierId || 'another-supplier-id',
    },
  ]
}

async function reply(supplierId, requestId, { description, price, availableDate }) {
  // TODO: reply to request
  return {
    id: requestId,
    customerId: 'one-customer-id',
    location: 'somewhere', 
    description, 
    requiredDate: '2018-05-05 22:26:43', 
    lastDate: '2018-05-05 22:27:01', 
    supplierId: supplierId,
    price,
    availableDate,
  }
}
