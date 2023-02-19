import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    status:{type:String, required:true},
    creator:{type: mongoose.Schema.Types.ObjectId, ref:'User'}
})

const projectModel = mongoose.model('Project',ProjectSchema);
export default projectModel;