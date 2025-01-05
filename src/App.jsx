import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./SIdebar/SIderbar";
import Teachers from "./TeacherTable/Teachers";
import {Routes,Route} from 'react-router-dom';
import TeacherPositions from "./TeacherPositions/TeacherPositions";
import TeacherModal from "./TeacherAdd/TeacherAdd";
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
                <Route path = '/teacherspositions' element = {<TeacherPositions />} />
                <Route path = '/addteacher' element = {<TeacherModal />} />
            </Routes>
          </div>
          
        </div>
       
      </div>
    
    )
  }
  export default App;