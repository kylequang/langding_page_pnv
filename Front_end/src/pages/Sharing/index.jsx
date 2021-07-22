import React, { Component } from 'react';
import { Row, Col, Image,Button, Card } from 'react-bootstrap'
import get_data from "../../services/getdata";
class Sharing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sharing: []
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
            <Row >
            
           
               {this.state.sharing.map((item) => {
                    return (
                    <Col md={3}>
                        <Card >
                            <Image src={item.image} style={{ width: '80%',height:'50%', marginLeft:'3em' }} roundedCircle />
                            <Card.Body>
                                <Card.Text style={{ textAlign: 'justify', marginLeft:'-2em' }}>
                                {item.content}
                                </Card.Text>
                                <Card.Title style={{ textAlign: 'left' }}>{item.name}</Card.Title>
                                <Card.Title style={{ textAlign: 'left' }}>{item.description}</Card.Title>
                            </Card.Body>
                            </Card>
                    </Col>
                    );
                })}
               
            </Row>
            <Row>
            <Col md={4}>
               <Card style={{ width: '30rem' }}>
                    <Image src="images/ShareBlog/thuong20.jpg" style={{ width: '80%',height:'50%', marginLeft:'3em' }} roundedCircle />
               
                <Card.Body>
                    <Card.Text style={{ textAlign: 'justify', marginLeft:'-2em' }}>
                    Nhiều người đã hỏi em rằng “Tại sao là con gái mà mà lại chọn nghề IT này cho cực, sao không đi theo ngành giáo viên hay du lịch cho khỏe”, rồi “Con gái theo ngành này thì không bao giờ bằng con trai đâu”. Khi ấy em cũng không biết phải trả lời thế nào, chỉ biết rằng mình nhất định phải theo đuổi ước mơ này dù có chuyện gì. Em tin rằng nếu cố gắng thì em sẽ làm được. Và em đã chọn PN là nơi nuôi dưỡng ước mơ ấy.”
                    </Card.Text>
                    <Card.Title style={{ textAlign: 'left' }}>Hoài NGÔ THỊ MỸ</Card.Title>
                    <Card.Title style={{ textAlign: 'left' }}>Sinh viên, khóa 2023, PN Việt Nam</Card.Title>
                </Card.Body>
                </Card>
               </Col>
            </Row>
            </>
        )
    }

}
export default Sharing;