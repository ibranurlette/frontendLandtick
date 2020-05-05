import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name lengkap</Form.Label>
              <Form.Control type="email" placeholder="nama lengkap" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>username</Form.Label>
              <Form.Control type="email" placeholder="username" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>email</Form.Label>
              <Form.Control type="email" placeholder="email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>password</Form.Label>
              <Form.Control type="email" placeholder="password" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select">
                <option>laki-laki</option>
                <option>perempuan</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Alamat</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="jl gadihu indah rt .. rw .."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
      <Button variant="primary" className="mr-3 mb-5" onClick={handleShow}>
        Join With Us
      </Button>
    </>
  );
}

export default Register;
