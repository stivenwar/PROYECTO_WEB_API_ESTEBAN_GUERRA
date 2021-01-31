const  mongoose = require('mongoose');
const URI = 'mongodb+srv://stivenwar:stivenwar@cluster0.7si8q.mongodb.net/miDataBase?retryWrites=true&w=majority';

mongoose.connect(URI,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(db => console.log('DB CONNECTED'))
    .catch(err => console.error(err));


module.exports = mongoose;

