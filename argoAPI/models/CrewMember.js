const mongoose = require('mongoose');

/**
 * @class Crew
 */
const CrewMember = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// Export model: Crew
module.exports = mongoose.model('Crew', CrewMember);
