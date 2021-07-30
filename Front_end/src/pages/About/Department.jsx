import React, { Component } from "react";
import Call_API from "../../services/CallAPI";

class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: [],
      open: false,
      setOpen: false,
    };
  }
  componentDidMount = async () => {
    await Call_API(`department`, "GET", null).then((item) => {
      this.setState({
        department: item.data,
      });
      console.log(item);
    });
  };
  render() {
    console.log(this.state.department);
    return (
      <>
        <h2 style={{ textAlign: "center" }}>Các phòng ban</h2>
        <p style={{ textAlign: "center" }}>
          Các phòng ban luôn có sự liên kết với nhau tạo nên hiệu quả trong công
          việc. Hướng đến mục đích chung là hỗ trợ sinh viên PNV.
        </p>

        <div className="row">
          {this.state.department.map((item) => {
            return (
              <div className="col-md-4">
                <div className="fh5co-team text-center ">
                  <figure>
                    <img src={item.image} alt="user" height="70px" />
                  </figure>
                  <div>
                    <h4 style={{ textAlign: "center", color: "#00008b" }}>
                      {item.nameDepartment}
                    </h4>
                    <p style={{ textAlign: "center", color: "#4169e1" }}>
                      {item.number}
                    </p>
                    <p>{item.descriptionst}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Department;
