import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Row, Col, Image, Card } from "react-bootstrap";
import get_data from "../../services/get-data";
import "./css/sharing.css";
class Sharing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sharing: [],
    };
  }
  componentDidMount = async () => {
    this.setState({
      sharing: await get_data("sharing", this.state.sharing),
    });
  };

  render() {
    return (
      <>
        <Container id="container_sharing">
          <h1>Những Bài Viết Nổi Bật</h1>
          <Row id="sharings">
            {this.state.sharing.map((item) => {
              if (item.id < 4) {
                return (
                  <Col md={3} sm={12} lg={4} className="card_sharing">
                    <Card className="card">
                      <Image className="img_sharing" src={item.image} />
                      <Card.Body id="contensharing">
                        <Card.Text id="content">{item.content}</Card.Text>
                        <Card.Title id="name">{item.name}</Card.Title>
                        <Card.Title id="desc">{item.description}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              }
            })}
          </Row>
        </Container>
      </>
    );
  }
}
export default Sharing;
