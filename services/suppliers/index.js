module.exports = {
  invite,
  register,
  list,
};

async function invite({ supplierName, lastName, firstName, phone, email }) {
  // TODO: invite supplier
  return 'http://should.be/registraion/link';
}

async function register({ supplierName, lastName, firstName, phone, email, password }) {
  // TODO: register supplier
  return { supplierName, lastName, firstName, phone, email, password };
}

async function list() {
  // TODO: list suppliers
  return [
    { supplierName: 'foo', lastName: 'Fooer', firstName: 'Foo', phone: '5553355', email: 'foo@fake.me' },
    { supplierName: 'bar', lastName: 'Baer', firstName: 'Bar', phone: '3332255', email: 'bar@fake.me' },
  ];
}
