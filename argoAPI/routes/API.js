const express = require('express');
const router = express.Router();
const Crew = require("../models/CrewMember");



/**
 * GET REQUEST : Retrieve all the crew members saved in the app
 * Return JSON containing all names
 */
router.get('/get-crew-member-list', async (req, res) => {

  try {
    // Retrieve the crew members names
    const crewMemberList = await Crew.find();
    res.send(crewMemberList);

  } catch (e) {
    res.send(e);
  }

});



/**
 * POST REQUEST : Add the crew member in the app
 * Insert input in crews table
 */
router.post('/add-crew-member', (req, res) => {

  // Create input in Crew Table
  const crewMember = new Crew({
    name: req.body.name
  });

  // Insert input
  crewMember.save()
    .then(data => {
      res.status(200);
      res.send(data);
    })
    .catch(err => {
      res.status(500);
      res.send(err);
    });
});

module.exports = router
