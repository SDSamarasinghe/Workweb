const Subject = require("../models/SubjectModel");

const addSubject = (req, res) => {
  const {
    moduleName,
    moduleId,
    duration,
    lectureIds,
    acedemicYear,

    
  } = req.body;

  const newSubject = new Subject({
    moduleName,
    moduleId,
    duration,
    lectureIds,
    acedemicYear,
  });

  newSubject
    .save()
    .then((createdAds) => {
      res.json(createdAds);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSubject = async (req, res) => {
  try {
    const ads = await Subject.find();
    res.json(ads);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getsingleSubject = async (req, res) => {
  try {
    const id = req.params.id;
    const ad = await Subject.findById(id);
    res.status(200).json(ad);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateSubject = async (req, res) => {
  const advID = req.params.id;
  try {
    const id = await Subject.findById(advID);

    if (!id) {
      return res.status(404).json("There is no Ad");
    }

    const {
        moduleName,
        moduleId,
        duration,
        lectureIds,
        acedemicYear,
      
    } = req.body;
    const adsr = await Subject.findByIdAndUpdate(advID, {
        moduleName,
        moduleId,
        duration,
        lectureIds,
        acedemicYear,
    });

    res.status(201).json({
      updated: true,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeSubject = async (req, res) => {
  const adID = req.params.id;

  try {
    const ad = await Subject.findById(adID);
    if (!ad) {
      return res.status(404).json("There is no Ad to remove");
    }

    const removedAds = await Subject.findByIdAndDelete(adID);
    res.status(200).json(removedAds);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = {
  addSubject,
  getSubject,
  getsingleSubject,
  updateSubject,
  removeSubject,
};
