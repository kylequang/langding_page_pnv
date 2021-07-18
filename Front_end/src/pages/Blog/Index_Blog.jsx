import React, { Component } from "react";
import "./blog.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import Title from "../../components/Tittle/TitleBlog";
import Date from "./Date";
import Comment from "./Comment";
import Content from "../../components/Contents/Blogs";
import ReadMore from "../../components/Buttons/ReadMore";

class Index_Blog extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={12}>
            <h2>SHARING</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <Row>
              <Col xs={6} md={6}>
                <Image
                  src="images/ShareBlog/thuong20.jpg"
                  className="img-responsive rounded"
                  width="90%"
                  style={{ height: "300px" }}
                />
              </Col>
              <Col xs={6} md={6} className="content">
                <h4>
                  Nhiều người đã hỏi em rằng “Tại sao là con gái mà mà lại chọn
                  nghề IT này cho cực, sao không đi theo ngành giáo viên hay du
                  lịch cho khỏe”, rồi “Con gái theo ngành này thì không bao giờ
                  bằng con trai đâu”. Khi ấy em cũng không biết phải trả lời thế
                  nào, chỉ biết rằng mình nhất định phải theo đuổi ước mơ này dù
                  có chuyện gì. Em tin rằng nếu cố gắng thì em sẽ làm được. Và
                  em đã chọn PN là nơi nuôi dưỡng ước mơ ấy.”
                </h4>
                <h5>Hoài NGÔ THỊ MỸ</h5>
                <p>Sinh viên, khóa 2023, PN Việt Nam</p>
              </Col>
            </Row>
          </Col>
          <Col xs={6} md={6}>
            <Row>
              <Col xs={6} md={6}>
                <Image
                  style={{ height: "300px" }}
                  src="images/ShareBlog/lecourrier.jpg"
                  className="img-responsive rounded"
                  width="90%"
                />
              </Col>
              <Col xs={6} md={6} className="content">
                <h4>
                  Người ta luôn nghĩ rằng thế giới CNTT rất lạnh lẽo vì chỉ toàn
                  máy móc và AI. Nhưng thông qua PN, tôi đã khám phá lại khía
                  cạnh nhân văn của công nghệ. Những nụ cười tươi tắn hay hay
                  những gương mặt tò mò của sinh viên đã gợi nhớ cho tôi về lí
                  do mà mình bắt đầu học code. Chính là vì thế giới trong máy
                  tính và những tiến bộ công nghệ tràn đầy sức hấp dẫn ấy! Ở PN
                  Việt Nam, chúng tôi đang đào tạo ra những kỹ sư công nghệ từ
                  những sinh viên lớn lên cùng việc đồng áng – nhiều em thậm chí
                  còn chưa từng chạm vào máy tính trước đây. Và chúng tôi rất
                  tận hưởng điều đó, bởi tại sao không chứ?
                </h4>
                <h5>Lucas SINROD</h5>
                <p>Giáo đốc Đào tạo & IT, PN Việt Nam</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <br></br>
        <Row className="align-items-center">
          <Col xs={12} md={12}>
            <h2>NEWS</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <div className="fh5co-blog ">
              <img
                className="img-responsive rounded"
                src="images/ShareBlog/thuong20.jpg"
                width="100%"
              />
              <Date />
              <div className="blog_detail">
                <Title title="Medical Mission in Southern Kenya" />
                <Content content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />
                <Comment comment="21" />
                <ReadMore />
              </div>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="fh5co-blog ">
              <img
                className="img-responsive rounded"
                src="images/ShareBlog/thuong20.jpg"
                width="100%"
              />
              <Date />
              <div className="blog_detail">
                <Title title="Medical Mission in Southern Kenya" />
                <Content content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />
                <Comment comment="21" />
                <ReadMore />
              </div>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="fh5co-blog ">
              <img
                className="img-responsive rounded"
                src="images/ShareBlog/thuong20.jpg"
                width="100%"
              />
              <Date />
              <div className="blog_detail">
                <Title title="Medical Mission in Southern Kenya" />
                <Content content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />
                <Comment comment="21" />
                <ReadMore />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Index_Blog;
