import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./css/covid.css";
class Covid extends Component {
  render() {
    return (
      <Container id="container_covid_uocmo">
        <Row>
          <Col>
            <h1>CHIẾN DỊCH “ĐÓNG GÓP NHỎ NUÔI ƯỚC MƠ TO”</h1>
            <p>
              Sự xuất hiện của đại dịch COVID-19 từ năm 2020 đến nay ít nhiều đã
              thay đổi cuộc sống của tất cả chúng ta. Với các em sinh viên nghèo
              đang theo học tại Passerelles Numériques Vietnam, dịch bệnh hoành
              hành không chỉ ảnh hưởng tới sinh hoạt thường ngày mà còn mang
              theo nhiều nỗi lo về việc học tập sắp tới.
            </p>
            <p>
              <strong>Trao cần câu chứ không trao con cá:</strong> Ước mơ của
              những sinh viên PNV là được học hành để nỗ lực vượt lên nghịch
              cảnh, đưa gia đình thoát nghèo một cách bền vững. Vậy nên, hãy
              trao các em chiếc cần câu mang tên giáo dục để các em có thể tự
              tay câu lấy những con cá và thay đổi cuộc đời của chính mình.
            </p>

            <p>
              Mọi thắc mắc về chiến dịch, xin vui lòng truy cập:{" "}
              <a href="https://www.passerellesnumeriques.org/vi/donggopnho-nuoi-uocmoto/?fbclid=IwAR1Ovn7HDh5fx2jWMF5uGVAKmvaqYBTOk1kqyr59P9KZy1OsC090oS353Ko">
                link
              </a>{" "}
            </p>
          </Col>
          <Col sm={12} md={5} lg={5}>
            <Image
              className="d-block w-100"
              src="https://i.ibb.co/NFWq8Nw/covid19pv.png"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Covid;
