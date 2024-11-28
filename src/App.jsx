import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./SIdebar/SIderbar";
import Teachers from "./TeacherTable/Teachers";
import {Routes,Route} from 'react-router-dom';
import "./App.css";

const App = () => {
  return (
    
    <div>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div>
          <Routes>
              <Route path = '/teachers' element = {<Teachers />}/>

          </Routes>
          
        </div>
      </div>
      
    </div>
   
  )
}
export default App;