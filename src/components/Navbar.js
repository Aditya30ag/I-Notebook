import React, { useEffect, useState, useRef, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./search.css";
import Search from "./Search";
import Searchbtn from "./Searchbtn";
import Notecontext from "../context/notes/NotesContext";

export default function Navbar(props) {
  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {}, [location]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    props.showalert();
    setvalue("");
  };
  const [value, setvalue] = useState("");
  const [results, setresults] = useState([]);
  const searchnote = async () => {
    const response = await fetch(
      "http://localhost:5000/api/notes/fetchallnotes",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    const results = await json.filter((user) => {
      return (
        value.length !== 0 &&
        user &&
        user.title &&
        user.title.toLowerCase().includes(value)
      );
    });

    setresults(results);
  };

  const handleonchange = (value) => {
    setvalue(value);
    searchnote(value);
  };
  /*const [style,setstyle]=useState({
    backgroundColor:"transparent",outline:"none",color:"whitesmoke"
  })*/
  const onSearch = (main) => {
    setvalue(main);
  };
  const a = useContext(Notecontext);
  const ref = useRef("null");
  const [title, settitle] = useState("");
  const [discription, setdiscretion] = useState("");
  const [tags, settags] = useState("");
  const onsearchclick = () => {
    ref.current.click();
    const notes = a.notes.map((note) => {
      return note;
    });
    for (var note of notes) {
      if (value === note.title) {
        settitle(note.title);
        setdiscretion(note.discription);
        settags(note.tags);
        break;
      } else {
        settitle("No results found");
        setdiscretion();
        settags();
      }
    }
    setvalue("");
  };
  const handleonClick3 = () => {
    setvalue("");
  };

  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand">iNotebook</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
                onClick={props.handleonClick2}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/about"
                onClick={handleonClick3}
              >
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex" role="search">
              <Link to="/login">
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                  onClick={props.handleonClick2}
                  style={{ marginRight: "10px" }}
                >
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                  onClick={props.handleonClick2}
                >
                  SignUp
                </button>
              </Link>
            </form>
          ) : (
            <>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  style={{
                    backgroundColor: "transparent",
                    outline: "none",
                    color: "whitesmoke",
                  }}
                  onChange={(e) => handleonchange(e.target.value)}
                  value={value}
                />
                <Search results={results} value={value} onSearch={onSearch} />
              </form>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                ref={ref}
                style={{ display: "none" }}
              >
                Reading a Note
              </button>
              <Searchbtn
                value={value}
                onsearchclick={onsearchclick}
                title={title}
                discription={discription}
                tags={tags}
              />{" "}
              <button className="btn btn-outline-primary" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
