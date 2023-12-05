const express=require("express");
const mongoose=require("mongoose");
const cors = require("cors");
const Todo = require("./Todo");
const cl=console.log.bind(console);

const app=express();
app.use(cors());
app.use(express.json());

app.get("/get",(req,res)=>{
    Todo.find({}).then(response=>{
        res.json(response)
    }).catch(err => console.log(err))
})


app.post("/add",(req,res)=>{
    const task= req.body.task;
    Todo.create({
        task: task
    })
    .then(result => res.json(result))
})

app.put("/delete",(req,res)=>{
    const id= req.body.item;
    Todo.findByIdAndDelete({_id:id}).then(response => res.json(response))
})

app.put("/update/:id",(req,res)=>{
    console.log("iu have been acessed")
    const {id}=req.params;
    const {value}=req.body;
    cl(id);
    cl(value);
    Todo.findByIdAndUpdate({_id:id},{task:value}).then(response=> res.json(response))
})

const start= ()=>{
    mongoose.connect("mongodb://localhost:27017/to-do-List");
    let port = process.env.PORT || 8080;
    app.listen(port,()=>{
        console.log("Server has been started on Port:" + port);
    })
}

start();