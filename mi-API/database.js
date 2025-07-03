const  mongoose = require('mongoose');
const URI = process.env.MONGO_URL;

mongoose.connect(URI,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(db => console.log('DB CONNECTED'))
    .catch(err => console.error(err));


module.exports = mongoose;

