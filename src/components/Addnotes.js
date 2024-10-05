import React, { useContext, useState } from "react";
import Notecontext from "../context/notes/NotesContext";

export default function Addnotes(props) {
  const a = useContext(Notecontext);

  const [notes, setnotes] = useState({ title: "", discription: "", tags: "" });

  const onchange = (e) => {
    setnotes({ ...notes, [e.target.name]: e.target.value });
  };

  const b=document.querySelector("#title");
  const c=document.querySelector("#discription");
  const d=document.querySelector("#tags");

  const [word, setword] = useState("");
  const handleonClick =  (e) => {
    const placeholder = async () => {
      e.preventDefault();
      if (notes.title.length <= 2 || notes.discription.length <= 2) {
        setword("Please enter at least 3 digits");
        b.style.border="1px solid red"
        c.style.border="1px solid red"
        d.style.border="1px solid red"
        setTimeout(()=>{
          setword("");
          b.style.border=""
          c.style.border=""
          d.style.border=""
        },1500)
      } else {
        setword("");
        console.log(notes.title, notes.discription, notes.tags);
        await a.addNotes(notes.title, notes.discription, notes.tags);
        setnotes({ title: "", discription: "", tags: "" });
        props.showalert();
      }
    };
    placeholder();
  };

  return (
    <div className="container my-3">
      <h1>Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onchange}
            value={notes.title}
            placeholder={word}
            style={{ backgroundColor: "#58445D", color: "white"}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="discription" className="form-label">
            Discription
          </label>
          <input
            type="text"
            className="form-control"
            id="discription"
            name="discription"
            onChange={onchange}
            value={notes.discription}
            placeholder={word}
            style={{ backgroundColor: "#58445D", color: "white" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            onChange={onchange}
            value={notes.tags}
            placeholder={word}
            style={{ backgroundColor: "#58445D", color: "white" }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-secondary"
          style={{ backgroundColor: "#34053E", color: "whitesmoke" }}
          onClick={handleonClick}
        >
          Add Note
        </button>
      </form>
    </div>
  );
}
