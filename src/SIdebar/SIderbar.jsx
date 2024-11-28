import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css"
const Sidebar = () => {
    const navigate = useNavigate('');
    const navigateTeachers = () => {
        navigate('/teachers')
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
            <div className="each" onClick = {navigateTeachers}>
                Giáo viên
            </div>
            <div className="each">
                Dữ liệu
            </div>
        </div>
    )
}
export default Sidebar;