import React, { Component } from 'react';
import {
  Row, Col, Container, Card,
  CardBody, CardTitle, CardSubtitle,
  CardText, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
  goToDetail = async () => {
    const axios = {
      get: () => ({ data: {
        id: 1,
        name: 'Harry Potter',
        genre: 'Comedy',
      } }),
    };
    const result = await axios.get('http://google.com/');
    this.props.history.push('/detail', result.data);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={12} className='p-5'>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sunt dolor sequi explicabo placeat fuga molestiae culpa ratione
              corrupti nobis voluptates nulla,
              temporibus officia odio enim vel velit! Aliquid, asperiores quisquam?</h1>
          </Col>
          <Col md={12}>
            <Container>
              <Row>
                {[...Array(3)].map((item, i) => (
                <Col key={i.toString()} md={4}>
                  <Card>
                    <CardBody>
                      <CardTitle>Hello World</CardTitle>
                      <CardSubtitle>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </CardSubtitle>
                      <CardText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </CardText>
                      <Button onClick={() => this.goToDetail(item)}>Detail</Button>
                      <Link to={{
                        pathname: '/detail',
                        search: '?id='.concat(item.id),
                      }} className='btn btn-secondary'>Detail</Link>
                    </CardBody>
                  </Card>
                </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
