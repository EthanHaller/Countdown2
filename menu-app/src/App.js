import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

const menu = {
  "breakfast": [
    {"food": "pancakes", "price": 5.00, "vegetarian": true},
    {"food": "waffles", "price": 5.00, "vegetarian": true},
    {"food": "orange juice", "price": 2.00, "vegetarian": true}
  ],
  "lunch": [
    {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
    {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
    {"food": "hamburger", "price": 8.00, "vegetarian": false}
  ],
  "dinner": [
    {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
    {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
    {"food": "chili", "price": 8.00, "vegetarian": false}
  ]
};

function App() {
  const [vegetarianOnly, setVegetarianOnly] = useState(false);

  function changeVisibility() {

    if(vegetarianOnly) {
      document.getElementById("vegetarianButton").innerText="Show Vegetarian Only";
    }
    else {
      document.getElementById("vegetarianButton").innerText="Show All";
    }
    setVegetarianOnly(!vegetarianOnly);
  }


  return (
    <React.Fragment>
      <h1>Menu</h1>
      <button id="vegetarianButton" onClick={() => changeVisibility()}>Show Only Vegetarian</button>
      <h2>Breakfast</h2>
      <Meal meal={menu.breakfast} isVegetarian={vegetarianOnly}></Meal>
      <h2>Lunch</h2>
      <Meal meal={menu.lunch} isVegetarian={vegetarianOnly}></Meal>
      <h2>Dinner</h2>
      <Meal meal={menu.dinner} isVegetarian={vegetarianOnly}></Meal>
    </React.Fragment>
  );
}

function Meal({meal, isVegetarian}) {
  const items = meal.map(item => {
    if(isVegetarian && !item.vegetarian) {
      return;
    }
    else {
      return (<MenuItem food={item.food} price={item.price}></MenuItem>);
    }
  })

  return <div>
    {items}
  </div>
}

function MenuItem({food, price}) {
  return (
    <p>{food + " ($" + price + ")"}</p>
  );
}

export default App;
