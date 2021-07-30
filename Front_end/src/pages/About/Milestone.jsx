import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Call_API from "../../services/CallAPI";
class Milestones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devmilestone: [],
      open: false,
      setOpen: false,
    };
  }
  componentDidMount = async () => {
    await Call_API(`devmilestone`, "GET", null).then((item) => {
      this.setState({
        devmilestone: item.data,
      });
      console.log(item);
    });
  };
  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 3000, min: 3000 },
        items: 4,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <div>
        <h2
          style={{
            textAlign: "center",
            color: "#4169e1",
            marginTop: "1px",
            marginBottom: "3px",
          }}
        >
          Các mốc phát triển
        </h2>

        <Carousel responsive={responsive}>
          {this.state.devmilestone.map((item) => {
            return (
              <div
                className="two-third animate-box"
                style={{
                  backgroundColor: "#E8E8E8",
                  height: "170px",
                  marginLeft: "30px",
                  marginRight: "30px",
                }}
              >
                <div>
                  <h5
                    style={{
                      textAlign: "center",
                      fontweight: "bold",
                      paddingleft: "100px",
                      borderBottom: "2px solid blue",
                      backgroundColor: "#FF9966",
                    }}
                  >
                    {item.time}
                  </h5>
                  <h6
                    style={{
                      textColor: "#FFFFFF",
                      paddingLeft: "70px",
                      paddingRight: "70px",
                      marginTop: "20px",
                      textAlign: "center",
                    }}
                  >
                    {item.contents}
                  </h6>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
export default Milestones;
