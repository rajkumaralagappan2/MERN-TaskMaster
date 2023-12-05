const mongoose= require("mongoose");

const taskSchema= new mongoose.Schema(
    {
        task: String,
        done:
        {
            type:Boolean,
            default:false
        }
    }
)

const task= mongoose.model("task",taskSchema);

module.exports = task