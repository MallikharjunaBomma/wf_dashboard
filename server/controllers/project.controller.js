import mongoose from "mongoose";
import Project from "../mongodb/models/project.js";
import User from "../mongodb/models/user.js";

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({}).limit(req.query._end);
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getProjectDetail = async (req, res) => {
  const { id } = req.params;
  const projectExists = await Project.findOne({ _id: id }).populate("creator");
  if (projectExists) {
    res.status(200).json(projectExists);
  } else {
    res.status(404).json({ message: "Project not exists" });
  }
};

const getProjectById = async (req, res) => {};
const createProject = async (req, res) => {
  try {
    const { title, description, status, email } = req.body;
    //start a new session
    const session = await mongoose.startSession();
    session.startTransaction();

    const user = await User.findOne({ email }).session(session);
    if (!user) throw new Error("Userrrr not found");

    const newProject = await Project.create({
      title,
      description,
      status,
      creator: user._id,
    });

    user.allProjects.push(newProject._id);
    await user.save({ session });
    await session.commitTransaction();
    res.status(200).json({ message: "project created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status } = req.body;

        await Project.findByIdAndUpdate(
            { _id: id },
            {
                title,
                description,
                status,
            },
        );

        res.status(200).json({ message: "Project updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const projectToDelete = await Project.findById({ _id: id }).populate(
      "creator"
    );
    if (!projectToDelete) throw new Error("Project not found");
    const session = await mongoose.startSession();
    session.startTransaction();
    projectToDelete.remove({ session });
    projectToDelete.creator.allProjects.pull(projectToDelete);
    await projectToDelete.creator.save({ session });
    await session.commitTransaction();
    res.status(200).json({ message: "project deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export {
  getAllProjects,
  getProjectDetail,
  createProject,
  updateProject,
  deleteProject,
};
