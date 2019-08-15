
require('dotenv').config()

const server = require('./api/server.js');

const port = process.env.PORT || 4000

server.listen(4000, () => {
  console.log(`\n*** Server Running on Port ${port} ***\n`);
});

// When running locally the ip is taken care of by localhost
// can hardcode any port over 3000 in 

// when deploying heroku will assign an ip address
// can not hardcode a port -> may be being used
// heroku needs to tell us what port
// (because it might be taken)