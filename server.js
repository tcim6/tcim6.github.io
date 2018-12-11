const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
const conn = mongoose.createConnection('mongodb://wasdag-app:faf4021799b9d7649272@ds115625.mlab.com:15625/wasdag')
conn.on('connected', function() {
    console.log('Connected to databse..');
});