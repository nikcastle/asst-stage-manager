import React from "react";
import { Col, Row, Container } from "reactstrap";
// import Jumbotron from "../components/Jumbotron";
// import Footer from "../components/Footer";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          {/* <Jumbotron /> */}
            
        </Col>
      </Row>
      <Row>
            <h1>404 Page Not Found <span role="img" aria-label="Poop emoji">
              <i className="fas fa-poo"></i>
              </span></h1>
      </Row>
     
      {/* <Footer /> */}
    </Container>
  );
}

export default NoMatch;