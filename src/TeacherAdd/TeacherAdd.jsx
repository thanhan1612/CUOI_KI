import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TeacherAdd.css";

const TeacherModal = () => {
  const [formdata, setFormdata] = useState({
    userId: "",
    isActive: "",
    isDeleted: "",
    code: "",
    startDate: "",
    endDate: "",
    teacherPositionsId: "",
    degrees: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/admin/teachers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
        credentials: "include",
      });

      if (response.ok) {
        const result = await response.json();
        alert("Teacher created successfully!");
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 3000);
      } else {
        const errorData = await response.json();
        alert("Failed to create teacher: " + (errorData.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("An error occurred: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container22">
      <div className="content">
        <h2>Điền thông tin giáo viên</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputs">
            <input
              name="userId"
              placeholder="User ID"
              onChange={handleChange}
              value={formdata.userId}
            />
            <input
              name="code"
              placeholder="Code"
              onChange={handleChange}
              value={formdata.code}
            />
            <input
              name="teacherPositionsId"
              placeholder="Teacher Position ID"
              onChange={handleChange}
              value={formdata.teacherPositionsId}
            />
            <input
              name="isActive"
              placeholder="Is Active"
              onChange={handleChange}
              value={formdata.isActive}
            />
            <input
              name="isDeleted"
              placeholder="Is Deleted"
              onChange={handleChange}
              value={formdata.isDeleted}
            />
            <input
              name="startDate"
              placeholder="Start Date"
              onChange={handleChange}
              value={formdata.startDate}
            />
            <input
              name="endDate"
              placeholder="End Date"
              onChange={handleChange}
              value={formdata.endDate}
            />
            <button
              className="createanaccount"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Create an account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherModal;


