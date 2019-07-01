import React, { Component } from 'react';
import { Container, Card, CardBody, CardHeader, CardText, Row, Col } from 'reactstrap';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <Container>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardHeader>Smurf Village</CardHeader>
                  <ul>
                    {this.props.smurfs.map(smurf => {
                      return (
                        <Smurf
                          name={smurf.name}
                          id={smurf.id}
                          age={smurf.age}
                          height={smurf.height}
                          key={smurf.id}
                        />
                      );
                    })}
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;

