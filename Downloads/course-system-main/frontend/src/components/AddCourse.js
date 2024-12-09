import React, { useState } from "react";
import api from "../services/api";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [instructor, setInstructor] = useState("");

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await api.post(
        "/courses",
        { title, description, duration, instructor },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Course added successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to add course.");
    }
  };

  return (
    <form onSubmit={handleAddCourse}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Instructor"
        value={instructor}
        onChange={(e) => setInstructor(e.target.value)}
        required
      />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default AddCourse;
