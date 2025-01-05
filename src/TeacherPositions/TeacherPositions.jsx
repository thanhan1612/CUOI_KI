import React from "react";
import { useState,useEffect } from "react";
const TeacherPositions =() =>{
    const [data,setData] = useState([]);
      
        useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await fetch('http://localhost:8080/admin/teachers-positions');
                const result = await response.json();
                console.group(result.teacherspositions);
                setData(result.teacherspositions);
                console.log(data);
               
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
                <thead>
                <tr>
                    <th>
                        name
                    </th>
                    <th>
                        code
                    </th>
                    <th>
                        des 
                    </th>
                   
                </tr>
                </thead>
                <tbody>
                    {
                        data.map((teacherspositions) => (
                            <tr>
                                <td>{teacherspositions.code}</td>
                                <td>{teacherspositions.name}</td>
                                <td>{teacherspositions.des}</td>                          
                                <td>Chi tiết</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        )
};
export default TeacherPositions;