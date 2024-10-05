import { useState } from "react";
import Notecontext from "./NotesContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const note = [];

  const [notes, setnotes] = useState(note);

  const getNotes = async () => {
    //Add api
    const response = await fetch(
      "http://localhost:5000/api/notes/fetchallnotes",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token:
            localStorage.getItem('token'),
        },
      }
    );
    const json = await response.json();
    setnotes(json);
  };

  const addNotes = async (title, discription, tags) => {
    //Add api
    let url = `${host}/api/notes/addnote`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token:
            localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, discription, tags }),
    });
    const json=await response.json();
    setnotes(notes.concat(json));
  };

  const deleteNotes = async (id) => {
    //Add api
    let url = `${host}/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3M2U4ZTBiZTE1OWU0YzEwM2FhMDBhIn0sImlhdCI6MTcxODg3MjMwMH0.McxaJWkJMVBh9IHOSBYIUguh4JyHTf08oYTEMLBPfog",
      },
    });
    const json=await response.json();
    console.log(json)
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newNotes);
  };

  const updateNotes = async (id, title, discription, tags) => {
    let url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3M2U4ZTBiZTE1OWU0YzEwM2FhMDBhIn0sImlhdCI6MTcxODg3MjMwMH0.McxaJWkJMVBh9IHOSBYIUguh4JyHTf08oYTEMLBPfog",
      },
      body: JSON.stringify({ title, discription, tags }),
    });
    const json=await response.json();
    console.log(json)

    let newNotes=JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].discription = discription;
        newNotes[i].tags = tags;
        break;
      }
    }
    setnotes(newNotes);
  };
  return (
    <Notecontext.Provider
      value={{ notes, addNotes, deleteNotes, updateNotes, getNotes }}
    >
      {props.children}
    </Notecontext.Provider>
  );
};

export default NoteState;
