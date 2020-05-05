import React from "react";
import "./Header.css";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { MdTrain } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar bg="light" className="Navbar" expand="lg">
        <Navbar.Brand href="#home" className="TextHeaderLantick">
          Landtick <MdTrain className="IconLandtick" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Ibra Nurlette</Nav.Link> */}
          </Nav>

          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              style={{
                borderRadius: 15,
                color: "#3989BE",
                marginRight: 50,
              }}
            >
              Ibra
              <BsFillPersonFill style={{ fontSize: 25, marginLeft: 5 }} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item style={{}}>
                <Link to="/keranjang">
                  <TiShoppingCart
                    style={{ fontSize: 25, paddingRight: 5, color: "#5DB549" }}
                  />
                  Keranjang
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
