import React from "react";
import { name, city } from "../data/data.js";

const firebrick = {
  color: 'firebrick'
}

function Home() {
  return (
  <div id="home">
    <h1 style={firebrick}> {name} is a Web Developer from {city} </h1>
  </div>
  )
}

export default Home;
