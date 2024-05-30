const mongoose = require('mongoose');
function ConnectMongo(){
     mongoose.connect('mongodb://localhost:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('Connection Successful')).catch((err) => console.log(err));
}
module.exports = ConnectMongo;