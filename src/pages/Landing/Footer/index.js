import React from "react";
// import { Navbar, Container } from "react-bootstrap";
function Footer() {
  return (
    <div>
      <footer className="bg-light text-dark" fixed="bottom">
        <div className="container text-center">
          <div className="row pt-3">
            <div className="col-sm-12">
              <p>
                &copy;copyright 2017 | built by.
                <i className="fas fa-user-circle mr-2 ml-2"></i>ibra nurlette
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
