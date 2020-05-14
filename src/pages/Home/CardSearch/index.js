import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { MdTrain } from "react-icons/md";
import "./cardsearch.css";
function CardSearch() {
  return (
    <div className="container mb-5" style={{ marginTop: -50 }}>
      <Card className="cardContainer">
        <Card.Body>
          <div className="row pl-4 pr-4">
            <div className="col-sm-4">
              <h2>
                {" "}
                <MdTrain
                  className="Icontrain"
                  style={{ color: "#3989be", fontSize: 50 }}
                />
                Tiket kereta api
              </h2>
            </div>
            <div className="col-sm-4">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Asal</Form.Label>
                  <Form.Control type="email" placeholder="asal" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Tanggal berangkat</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Form>
            </div>
            <div className="col-sm-4">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Tujuan</Form.Label>
                  <Form.Control type="text" placeholder="tujuan" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Pulang pergi" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardSearch;
