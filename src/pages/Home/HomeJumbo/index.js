import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./homeJumbo.css";
import { Carousel } from "react-bootstrap";
import iklan from "../../../assets/iklan.jpg";
function HomeJumbo() {
  return (
    <div className="jumboHomeContainer">
      <div className="row">
        <div className="col-sm">
          <Jumbotron className="bg-transparent">
            <h1 className="TextHomeLantick">LANDTICK</h1>
            <p className="DescHomeLantick">
              Easy way to find your ticket and buy for your transportation.
            </p>
          </Jumbotron>
        </div>
        <div className="col-sm">
          <div className="container">
            <Carousel className="container">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={iklan}
                  alt="First slide"
                  style={{ borderRadius: 10 }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={iklan}
                  alt="Third slide"
                  style={{ borderRadius: 10 }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={iklan}
                  alt="Third slide"
                  style={{ borderRadius: 10 }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeJumbo;
