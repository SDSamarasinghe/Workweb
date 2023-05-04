const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    moduleName:String,
    moduleId:String,
    duration:String,
    lectureIds:String,
    acedemicYear:String

});

const Subject = mongoose.model("SubjectsModel", SubjectSchema);

module.exports = Subject;