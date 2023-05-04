const express = require("express");
const router = express.Router();
const { 
  addSubject,
  getSubject,
  getsingleSubject,
  updateSubject,
  removeSubject,
 } = require("../controllers/SubjectController");


//@route GET api/ads/all
//@desc Get all ads
router.get("/all", getSubject);

//@route POST api/ads
//@desc Add an ads
router.post("/", addSubject);

//@route PUT api/Ads/:id
//@desc Update an Ads
router.put("/:id", updateSubject);

//@route DELETE api/Ads/:id
//@desc delete an Ads
router.delete("/:id", removeSubject);

//@route getSpecific api/Ads/:id
//@desc getSpecific an Ads
router.get("/:id", getsingleSubject);

module.exports = router;
