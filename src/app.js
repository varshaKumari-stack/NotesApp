const express = require("express");
const noteModel = require("./models/note.model");
const app = express();
app.use(express.json());
app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;
  const noteData = await noteModel.create({
    title,
    description,
  });
  res.status(201).json({
    message: "Post Create Successfully",
    noteData,
  });
});
app.get("/api/notes", async (req, res) => {
  const noteData = await noteModel.find();
  res.status(200).json({
    message: "Fetch Post Successfully",
    noteData,
  });
});
app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "Delete Post Successfully",
  });
});
app.patch('/api/notes/:id',async(req,res)=>{
const {title,description}=req.body;
const id=req.params.id;
 await noteModel.findByIdAndUpdate(id,{title,description})
  res.status(200).json({
    "message":"Note Update Successfully.",
     
  })
 
    
})
module.exports = app;
