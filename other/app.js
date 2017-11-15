const weather = require('./weather');

const query = process.argv.slice(2).join("_").replace(' ', '_');
const state = query.lastIndexOf('_');
//const query = process.argv.slice(2);
//const query = 'CA/san_diego';

weather.get(query);








