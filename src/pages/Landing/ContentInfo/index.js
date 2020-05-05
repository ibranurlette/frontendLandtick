import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";
import image3 from "../../../assets/3.jpg";
import image4 from "../../../assets/4.jpg";
import image5 from "../../../assets/5.jpg";
import image6 from "../../../assets/6.jpg";
function Content() {
  return (
    <Container>
      <h1 className="text-center mb-4">Our train</h1>
      <div className="row">
        <div className="col-sm mb-4">
          <Card>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Train 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="info">Detail</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm mb-4">
          <Card>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>Train 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the Train 2 and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="info">Detail</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm mb-4">
          <Card>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Train 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the Train 2 and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="info">Detail</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-sm mb-4">
          <Card>
            <Card.Img variant="top" src={image4} />
            <Card.Body>
              <Card.Title>Train 4</Card.Title>
              <Card.Text>
                Some quick example text to build on the Train 2 and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="info">Detail</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm mb-4">
          <Card>
            <Card.Img variant="top" src={image5} />
            <Card.Body>
              <Card.Title>Train 5</Card.Title>
              <Card.Text>
                Some quick example text to build on the Train 2 and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="info">Detail</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm mb-4">
          <Card>
            <Card.Img variant="top" src={image6} />
            <Card.Body>
              <Card.Title>Train 6</Card.Title>
              <Card.Text>
                Some quick example text to build on the Train 2 and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="info">Detail</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default Content;
