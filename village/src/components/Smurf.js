import React from 'react';
import { Container, Card, CardBody, CardHeader, Row, Col } from 'reactstrap';
const Smurf = props => {
  return (
    <div className="Smurf">
      <Container>
        <Row>
          <Col>
            <Card className="card">
              <CardBody>
                <CardHeader className="card-head">Smurf Village Member</CardHeader>
                <h3>{props.name}</h3>
                <strong>{props.height} tall</strong>
                <p>{props.age} smurf years old</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;


