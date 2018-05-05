module.exports = {
  invite,
  register,
};

async function invite({ supplierName, lastName, firstName, phone, email }) {
  // TODO: invite supplier
  return 'http://should.be/registraion/link';
}

async function register({ supplierName, lastName, firstName, phone, email, password }) {
  // TODO: register supplier
  return { supplierName, lastName, firstName, phone, email, password };
}
