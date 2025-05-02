import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // For prop validation
const UpdateItem = ({ item }) => {
    // 1. Create a state for the form
    // 2. Create a function to handle the form submission
    // 3. Create a function to handle the form input changes

    // your code here
    return null;
const UpdateItem = ({ itemId, item }) => {
  const [formData, setFormData] = useState(item || {});
  const API_URI = `http://${import.meta.env.VITE_API_URI}/doors/${itemId}`;

  useEffect(() => {
    if (item) setFormData(item);
  }, [item]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(API_URI, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log("Updated item:", data))
      .catch((err) => console.error("Error updating item:", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name || ""}
        onChange={handleChange}
      />
      <button type="submit">Update</button>
    </form>
  );
};
}
export default UpdateItem;
