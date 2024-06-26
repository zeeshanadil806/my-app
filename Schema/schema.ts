import mongoose from "mongoose";

export const tasksSchema = new mongoose.Schema({
    taskTitle : String,
    taskDesc : String
})


export const taskModel = mongoose.models.tasks || mongoose.model("products", tasksSchema);