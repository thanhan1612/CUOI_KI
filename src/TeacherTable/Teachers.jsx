import React from "react";
import { useState, useEffect } from "react";
import './Teachers.css';
const Teachers =() => {
    const [data,setData] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8080/admin/teachers');
            const result = await response.json();
            console.group(result.teachersusers);
            setData(result.teachersusers);
           
           ;
          } catch (error) {
            console.error('Error fetching data:', error);
          } 
        };
    
        fetchData();
      }, []);
    return (
        <div className="teacherstable">
            <table>
                <tr>
                    <th>
                        Mã
                    </th>
                    <th>
                        Giáo viên
                    </th>
                    <th>
                        Trình độ cao nhất 
                    </th>
                    <th>
                        Bộ môn
                    </th>
                    <th>
                        TT Công tác
                    </th>
                    <th>
                        Địa chỉ
                    </th>
                    <th>
                        Trạng thái
                    </th>
                    <th>
                        Hành động
                    </th>
                </tr>
                <tbody>
                    {
                        data.map((teachers) => (
                            <tr>
                                <td>{teachers.code}</td>
                                <td>{teachers.userId ? teachers.userId.name : "no name found"}</td>
                                <td> {teachers.degrees && teachers.degrees.length > 0
                                ? teachers.degrees[0].type 
                                : 'No Degree'}</td>
                                <td>{teachers.degrees && teachers.degrees.length > 0 ? teachers.degrees[0].major: "No major"}</td>
                                <td>{teachers.teacherPositionsId ? teachers.teacherPositionsId.name : 'no position found'}</td>
                                <td>{teachers.userId ? teachers.userId.address : "no address found"}</td>
                                <td>{teachers.isActive ? "Đang công tác" : "Không đang công tác"}</td>
                                <td>Chi tiết</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Teachers;