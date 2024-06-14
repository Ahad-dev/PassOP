const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/PassOp');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

const userSchema = mongoose.Schema({
    site:String,
    username: String,
    password: String,
    id: String
    });

const User = mongoose.model('User', userSchema);
module.exports = {User:User,db:db};