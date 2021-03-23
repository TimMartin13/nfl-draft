import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ImageCard from '../ImageCard';

const Feature = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: "navy", height: "42rem", color: "white" }}>
        <Row>
          <Col md={1}></Col>
          <Col md={5} style={{ margin: "70px 0px" }}>
            <Badge variant="warning" style={{ padding: "4px" }}>FEATURED</Badge>
            <div style={{ fontSize: "40px", fontWeight: "bold" }}>BUTKUS AWARD WINNER</div>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, ab incidunt.
            </p>
            <Button style={{ fontSize: "11px", padding: "15px 30px" }}>READ MORE</Button>
          </Col>
          <Col md={5}>
            <img style={{ maxWidth: "100%", height: "400px", borderRadius: "10px", marginTop: "40px", boxShadow: "4px 4px 8px 4px rgba(0, 0, 0, 0.4)" }} src="https://www.si.com/.image/t_share/MTc5MTc2NTI4OTQ3NDU1NzM2/usatsi_13507985_168388382_lowres.jpg" />
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col md={1}></Col>
          <Col>
            <ImageCard />
          </Col>
          <Col>
            <ImageCard />
          </Col>
          <Col>
            <ImageCard />
          </Col>
          <Col>
            <ImageCard />
          </Col>
          <Col>
            <ImageCard />
          </Col>
          <Col md={1}></Col>
          {/* Loop to show 5 past features */}
          {/* <PastFeatureScroll /> */}
        </Row>
      </Container>
    </>
  )
}

export default Feature;