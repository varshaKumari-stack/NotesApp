import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [notes, setNote] = useState([]);
  useEffect(() => {
    fetchNote();
  }, []);
  function fetchNote() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNote(res.data.noteData);
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;
    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data);
        fetchNote();
      });
  }
  function handleDelete(noteId) {
    axios.delete("http://localhost:3000/api/notes/" + noteId).then((res) => {
      console.log(res.data);
      fetchNote();
    });
  }
function handleUpdate(noteId) {
  const newTitle = prompt("Enter new title", noteId.title);
  if (newTitle === null) return;

  const newDescription = prompt(
    "Enter new description",
    noteId.description
  );
  if (newDescription === null) return;

  axios
    .patch("http://localhost:3000/api/notes/"+noteId, {
      title: newTitle,
      description: newDescription,
    })
    .then((res) => {
      console.log(res.data);
      fetchNote();
    })
     
}
  return (
    <>
      <form className="form-create" onSubmit={submitHandler}>
        <input type="text" name="title" placeholder="Enter Title" />
        <input type="text" name="description" placeholder="Enter Description" />
        <button>Create Note</button>
      </form>
      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <div className="btn">
                <button onClick={() => handleDelete(note._id)}>Delete</button>
                <button  onClick={() =>  handleUpdate(note._id)}>Update</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
