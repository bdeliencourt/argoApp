const mongoose = require('mongoose');

// Define CrewMember table
const CrewMember = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// Export model: Crew
module.exports = mongoose.model('Crew', CrewMember);
