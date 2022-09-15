const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new mongoose.Schema({
  username: String,
  email: String,
  userId: {},
  search: [],
  search_history: [],
  saved: []
});


module.exports = mongoose.models.Users || mongoose.model('Users', usersSchema)