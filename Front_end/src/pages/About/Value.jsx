import React, { Component } from 'react';
import Call_API from '../../services/CallAPI';
import Subtittle from '../../components/Tittle/SubTittle';
import About from '../../components/Contents/About';
import { Container, Row, Col } from 'react-bootstrap';
class Value extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mainvalue: []
        }
    }
    componentDidMount = async () => {
        await Call_API(`mainvalue`, 'GET', null).then((db) => {
            this.setState({
                mainvalue: db.data
            })
        }
        )
    }
    render() {
        return (
            <Container>
                <h1>GIÁ TRỊ PNV</h1>
                <Row>
                    {
                        this.state.mainvalue.map((item) => {
                            return (
                                <Col>
                                    <Subtittle subtittle={item.name_value}></Subtittle>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        );
    }
}
export default Value;