import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FoodOption from "./components/FoodOption";
import GroceryOption from "./components/GroceryOption";
import DineOption from "./components/DineOption";
import Restaurant from "./components/Restaurant";


function App() {
  return (
    <div>
      <Header></Header>
      <FoodOption></FoodOption>
      <GroceryOption></GroceryOption>
       <DineOption></DineOption>
       <Restaurant></Restaurant>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Proxy server: "https://cors-anywhere.herokuapp.com/"; 