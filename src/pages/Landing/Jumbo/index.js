import React from "react";
import "./jumbo.css";
import { Jumbotron } from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";
function Jumbo() {
  return (
    <div className="jumboContainer">
      <Jumbotron className="bg-transparent">
        <h1 className="mt-5 TextLantick">LANDTICK</h1>
        <p className="mb-5 DescLantick">
          Easy way to find your ticket and buy for your transportation.
        </p>
        <p>
          <Register />
          <Login />
        </p>
      </Jumbotron>
    </div>
  );
}

export default Jumbo;
