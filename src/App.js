import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'

function App() {
  document.body.style.background="linear-gradient(#000000,#34053E)";
  document.body.style.backgroundRepeat="no-repeat"
  document.body.style.minHeight="100vh";
  document.body.style.color="#E8C5F0";

  const [progress,setprogress]=useState(0);

  const showalert=()=>{
    setTimeout(()=>{
      setprogress(20);
    },100)
    setTimeout(()=>{
      setprogress(40);
    },200)
    setTimeout(()=>{
      setprogress(60);
    },300)
    setTimeout(()=>{
      setprogress(80);
    },400)
    setTimeout(()=>{
      setprogress(100);
    },500)
      
  }
  const handleonClick2=()=>{
    showalert();
  }
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar showalert={showalert} handleonClick2={handleonClick2}/><LoadingBar
      color='#DED9DF'
      progress={progress}
      /><div className='container'><Home showalert={showalert} handleonClick2={handleonClick2}/></div></>
    },
    {
      path:"/about",
      element:<><Navbar showalert={showalert} handleonClick2={handleonClick2}/><LoadingBar
      color='#DED9DF'
      progress={progress}
      /><div className='container'><About/></div></>
    },
    {
      path:"/signup",
      element:<><Navbar showalert={showalert} handleonClick2={handleonClick2}/><LoadingBar
      color='#DED9DF'
      progress={progress}
      /><div className='container'><Signup showalert={showalert} handleonClick2={handleonClick2}/></div></>
    },
    {
      path:"/login",
      element:<><Navbar showalert={showalert} handleonClick2={handleonClick2}/><LoadingBar
      color='#DED9DF'
      progress={progress}
      /><div className='container'><Login showalert={showalert} handleonClick2={handleonClick2}/></div></>
    }
  ])
 
  return (
    <>
    <NoteState>
    <RouterProvider router={router}/>
    </NoteState>
    </>
  );
}

export default App;
