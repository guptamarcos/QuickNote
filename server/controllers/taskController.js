const Task = require("../models/taskSchema.js");
const User = require("../models/userSchema.js");
const { taskValidate } = require("../utils/schemaValidator.js");


// GETTING ALL THE TASK
module.exports.indexRoute = async (req, res) => {
  const allTasks = await Task.find({ owner: req.user._id }).sort({
    isPinned: -1,
    createdAt: -1,
  });

  res.status(200).json({
    success: true,
    message: "All tasks are successfully returned",
    allTasks,
  });
};

// CREATING NEW TASK
module.exports.newRoute = async (req, res) => {
  const { error, value } = taskValidate.validate(req.body);
  if (error) {
    return res.status(400).json({ success: false, error: error.details[0].message });
  }
  const newTask = await Task.create({
    title: value.title,
    content: value.content,
    tags: value.tags,
    owner: req.user._id,
  });

  await User.findByIdAndUpdate(req.user._id, {$push: {allTasks: newTask._id}});
  res.status(201).json({ success: true, message: "Task is created successfully" });
};

// UPDATE ROUTE
module.exports.updateRoute = async (req, res) => {
  const { id } = req.params;

  const { error, value } = taskValidate.validate(req.body);
  if (error) {
    return res.status(400).json({ success: false, message: error.details[0].message });
  }

  await Task.findOneAndUpdate({ _id: id },
    {
      title: value.title,
      content: value.content,
      isPinned: value.isPinned,
      tags: value.tags,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({ success: true, message: "Task is updated successfully" });
};

module.exports.isPinnedRoute = async (req, res) => {
  const { id } = req.params;
  const { isPinned } = req.body;

  await Task.findOneAndUpdate({ _id: id },
    {
      isPinned: isPinned || false,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({ success: true, message: "Task is updated successfully" });
};

// DELETING ROUTE
module.exports.deleteRoute = async (req, res) => {
  const { id } = req.params;
  const deletedTask = await Task.findByIdAndDelete(id);
  if(!deletedTask){
    return res.status(404).json({success: false, message: "Task not found!!"});
  }
  const currUser = await User.findById(req.user._id);
   
  await User.findByIdAndUpdate(req.user._id, {$pull: {allTasks: deletedTask._id}});
  
  res.status(200).json({
    success: true,
    message: "Task deleted successfully",
    deletedTask,
  });
};
