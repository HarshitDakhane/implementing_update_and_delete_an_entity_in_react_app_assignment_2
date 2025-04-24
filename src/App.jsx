import { useState, useEffect } from "react";
import UpdateItem from "./components/UpdateItem";

// use the following link to get the data
// `/doors` will give you all the doors, to get a specific door use `/doors/1`.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  // Get the existing item from the server
  // const [item, setItem] = useState(null);
  // pass the item to UpdateItem as a prop
  const [itemId, setItemId] = useState(1); // Example: Default ID 1
  const [item, setItem] = useState(null);

  return <UpdateItem />;
  useEffect(() => {
    fetch(`${API_URI}/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.error("Error fetching item:", err));
  }, [itemId]);

  return <UpdateItem item={item} itemId={itemId} />;
}

export default App;