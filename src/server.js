require('dotenv').config({ encoding: 'UTF8' });
const app = require('./app');

app.listen(process.env.PORT || 3000);