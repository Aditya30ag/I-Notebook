import React /*{ useContext }*/ from "react";
//import Notecontext from '../context/notes/NotesContext'

export default function About() {
  //const a=useContext(Notecontext)
  return (
    <div className="container my-4">
    <div className="form-floating">
      <textarea
        className="form-control"
        placeholder="Leave a comment here"
        id="floatingTextarea"
        style={{backgroundColor:"transparent",height:"400px",fontSize:"22px",color:"white",paddingTop:"40px"}}
      ></textarea>
      <label htmlFor="floatingTextarea" style={{color:"black"}}>Write about your self</label>
    </div>
    </div>
  );
}
