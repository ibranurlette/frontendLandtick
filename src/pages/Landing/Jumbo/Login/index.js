import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>username</Form.Label>
              <Form.Control type="email" placeholder="username" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>password</Form.Label>
              <Form.Control type="email" placeholder="password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/home">
            <Button variant="primary" onClick={handleClose}>
              Simpan
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      <Button variant="primary" className="mb-5" onClick={handleShow}>
        Already Join
      </Button>
    </>
  );
}

export default Login;
