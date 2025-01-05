import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css"
const Sidebar = () => {
    const navigate = useNavigate('');
    const [toggleDown,setToggleDown] = useState(false);
    const [isClicked,setIsClicked] = useState(false);
    const [isClicked2,setIsClicked2] = useState(false);
    const [toggleDown1,setToggleDown1] = useState(false);
    const [isClicked3,setIsClicked3] = useState(false);
    
    const fixState =() =>{
        setToggleDown((prev) => !prev);
    };
    const fixState1 =() => {
        setToggleDown1((prev)=>!prev);
    };
    const clicked = () => {
        fixState1();
        
        navigateTeachers();
    }
    const navigateTeachers = () => {
        if (isClicked) {
            navigate('/'); // Navigate back to the main sidebar or homepage
          } else {
            navigate('/teachers'); // Navigate to the teachers component
          }
          setIsClicked((prev) => !prev); // Toggl
    };
    const navigateTeachersPostions =() =>{
        if (isClicked2) {
            navigate('/');
        } else {
            navigate('/teacherspositions');
        }
        setIsClicked2((prev) => !prev);
    }
    const navigateModel = () => {
        navigate('/addteacher');
    }
    return (
        <div className="sidebar">
            
            <div className="each">
                Thống kê
            </div>
            <div className="each">
                Lớp học
            </div>
            <div className="each">
                Học sinh
            </div>
            <div className="container2">
                <div className="each" onClick = {clicked}>
                    Giáo viên
                </div>
                {toggleDown1 && (
                    <div className="teacher" onClick={navigateModel}>
                        <a>Them giao vien</a>
                    </div>
                )}
            </div>
            <div className="container">
            <div className="each" onClick={fixState}>
                Dữ liệu
            </div>
            {toggleDown && (
                <div className="dropdown" onClick={navigateTeachersPostions}>
                    <a>vi tri giao vien</a>
                </div>
            )}
            </div>
            
        </div>
    )
}
export default Sidebar;