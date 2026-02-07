// ============================
// index.html
// ============================
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Swiggy Clone</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

// ============================
// src/main.jsx
// ============================
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ============================
// src/App.jsx
// ============================
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default App;

// ============================
// src/components/Header.jsx
// ============================
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>Swiggy</h1>
      <ul className="nav">
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;

// ============================
// src/components/Body.jsx
// ============================
import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const filteredRestaurants = restaurantList.filter((res) =>
    res.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="body">
      <input
        type="text"
        placeholder="Search restaurants"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search"
      />

      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

// ============================
// src/components/RestaurantCard.jsx
// ============================
import React from "react";

const RestaurantCard = ({ name, cuisine, rating, deliveryTime, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{cuisine}</p>
      <p>⭐ {rating}</p>
      <p>{deliveryTime} mins</p>
    </div>
  );
};

export default RestaurantCard;

// ============================
// src/utils/mockData.js
// ============================
const restaurantList = [
  {
    id: 1,
    name: "Burger King",
    cuisine: "Burgers, Fast Food",
    rating: 4.2,
    deliveryTime: 30,
    image: "https://source.unsplash.com/400x300/?burger",
  },
  {
    id: 2,
    name: "Domino's Pizza",
    cuisine: "Pizza, Italian",
    rating: 4.4,
    deliveryTime: 25,
    image: "https://source.unsplash.com/400x300/?pizza",
  },
  {
    id: 3,
    name: "Biryani House",
    cuisine: "Biryani, Indian",
    rating: 4.1,
    deliveryTime: 35,
    image: "https://source.unsplash.com/400x300/?biryani",
  },
];

export default restaurantList;

// ============================
// src/styles.css
// ============================
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #fc8019;
  color: white;
}

.nav {
  list-style: none;
  display: flex;
  gap: 20px;
}

.body {
  padding: 20px;
}

.search {
  padding: 10px;
  width: 300px;
  margin-bottom: 20px;
}

.restaurant-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
}
