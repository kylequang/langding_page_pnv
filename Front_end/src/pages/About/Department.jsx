import React, { Component } from "react";

class Department extends Component {
  render() {
    return (
      <>
        <div id="fh5co-content-section" className="fh5co-section-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center heading-section ">
                <h3>Các phòng ban</h3>
                <p>
                  Các phòng ban luôn có sự liên kết với nhau tạo nên hiệu quả
                  trong công việc. Hướng đến mục đích chung là hỗ trợ sinh viên
                  PNV.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="fh5co-team text-center ">
                  <figure>
                    <img src="images/person_1.jpg" alt="user" />
                  </figure>
                  <div>
                    <h3>Phòng tuyển sinh </h3>
                    <h3>
                      <p>
                        <span>2 thàn viên</span>
                      </p>
                      <p>
                        Phòng Tuyển sinh có chức năng Xây dựng, lập kế hoạch, tổ
                        chức và triển khai các hoạt động liên quan đến tuyển
                        sinh . Tìm kiếm những học sinh có hoàn cảnh khó khăn
                        không có khả năng học tập.
                      </p>
                    </h3>
                  </div>
                  <p className="fh5co-social-icons">
                    <a href="#">
                      <i className="icon-twitter2" />
                    </a>
                    <a href="#">
                      <i className="icon-linkedin2" />
                    </a>
                    <a href="#">
                      <i className="icon-facebook3" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fh5co-team text-center ">
                  <figure>
                    <img src="images/person_2.jpg" alt="user" />
                  </figure>
                  <div>
                    <h3>Phòng đào tạo</h3>
                    <p>
                      <span>11 thành viên</span>
                    </p>
                    <p>
                      {" "}
                      Xây dựng, phát triển, quản lý chương trình đào tạo và các
                      hoạt động giảng dạy . Tham mưu hoạch định chiến lược phát
                      triển đào tạo. Theo dõi quá trình giảng dạy, học tập và
                      kết quả học tập.
                    </p>
                  </div>
                  <p className="fh5co-social-icons">
                    <a href="#">
                      <i className="icon-twitter2" />
                    </a>
                    <a href="#">
                      <i className="icon-linkedin2" />
                    </a>
                    <a href="#">
                      <i className="icon-facebook3" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fh5co-team text-center">
                  <figure>
                    <img src="images/person_2.jpg" alt="user" />
                  </figure>
                  <div>
                    <h3>Phòng đối ngoại</h3>
                    <p>
                      <span>3 thành viên</span>
                    </p>
                    <p>
                      Xây dựng mục tiêu và kế hoạch tuyên truyền, quảng bá hình
                      ảnh, phát triển thương hiệu và hình ảnh của Trường. Chủ
                      động tìm kiếm, tìm hiểu các tổ chức, cá nhân có năng lực,
                      và thiện chí để hợp tác.
                    </p>
                  </div>
                  <p className="fh5co-social-icons">
                    <a href="#">
                      <i className="icon-twitter2" />
                    </a>
                    <a href="#">
                      <i className="icon-linkedin2" />
                    </a>
                    <a href="#">
                      <i className="icon-facebook3" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fh5co-team text-center ">
                  <figure>
                    <img src="images/person_2.jpg" alt="user" />
                  </figure>
                  <div>
                    <h3>Phòng nhân sự &amp; tài chính</h3>
                    <p>
                      <span>2 thành viên</span>
                    </p>
                    <p>
                      Công việc của phòng nhân sự &amp; tài chính là các hoạt
                      động tuyển dụng, lên kế hoạch triển khai các chính sách
                      phù hợp để duy trì nguồn nhân lực cho trường và quản lý
                      tài chính.
                    </p>
                  </div>
                  <p className="fh5co-social-icons">
                    <a href="#">
                      <i className="icon-twitter2" />
                    </a>
                    <a href="#">
                      <i className="icon-linkedin2" />
                    </a>
                    <a href="#">
                      <i className="icon-facebook3" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fh5co-team text-center ">
                  <figure>
                    <img src="images/person_3.jpg" alt="user" />
                  </figure>
                  <div>
                    <h3>Phòng giáo dục</h3>
                    <p>
                      <span>4 thành viên</span>
                    </p>
                    <p>
                      Quản lý đời sống của sinh viên. Lên kế hoạch các chương
                      trình kỹ năng đời sống. Gỉai quyết những vấn đề ở ktx và
                      hỗ trợ đời sống tinh thần cho sinh viên
                    </p>
                  </div>
                  <p className="fh5co-social-icons">
                    <a href="#">
                      <i className="icon-twitter2" />
                    </a>
                    <a href="#">
                      <i className="icon-linkedin2" />
                    </a>
                    <a href="#">
                      <i className="icon-facebook3" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Department;
