import React, { Component } from "react";

class History extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 text-center heading-section">
                    <h3>Lịch sử hình thành </h3>
                    <p style={{ textAlign: "left" }}>
                        <a>Passerelles numériques (PN)</a>
                        là một tổ chức phi chính phủ của Pháp, được thành lập
                        năm 2005 và đang hoạt động tại 3 quốc gia châu Á:
                        Campuchia, Philippines và Việt Nam.
                    </p>
                    <p style={{ textAlign: "left" }}>
                        Các đối tượng PN hỗ trợ là các thanh thiếu niên có hoàn
                        cảnh rất khó khăn, rất cần sự giúp đỡ Tùy theo đặc thù
                        mỗi nước mà PN có trung tâm đào tạo đang hoạt động, các
                        tiêu chí tuyển sinh sẽ được điều chỉnh cho phù hợp.
                    </p>
                </div>
            </div>
        );
    }
}

export default History;
