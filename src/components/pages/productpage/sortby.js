import { useState } from "react";
import "./sortby.css"
// import ReactDOM from "react-dom/client";

function Sortby() {
  const [product, setproduct] = useState("Relevance");

  const handleChange = (event) => {
    setproduct(event.target.value)
  }

  return (
    <form className="sortout">
      <select className="rele" value={product} onChange={handleChange}>
        <option value="name">Relevance</option>
        <option value="price">Price</option>
        <option value="size">Size</option>
      </select>
    </form>
  )
};

export default Sortby