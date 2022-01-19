const URL =
  process.env.NODE_ENV === 'develoment'
    ? 'http://localhost:4000'
    : 'https://terastore.herokuapp.com';

export default URL;
