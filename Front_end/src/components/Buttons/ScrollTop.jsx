import React, { Component } from "react";
import "./css/ScrollTop.css";
class ScrollTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      //set chiều hiển thị
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", //đến top sẽ mờ đi
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top">
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <svg height="38.735" width="33.749">
              <g transform="translate(-18.121 -3.364)">
                <rect
                  ry="6.9288" //chỉnh vị trí
                  y="3.364" //chỉnh vị trí
                  x="18.121" //chỉnh vị trí
                  height="50.735"
                  width="33.749"
                  fill="#fd7e14"
                />
                <g transform="translate(-.48 2.134)">
                  <rect />
                  <g fill="white">
                    <path d="M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        )}
      </div>
    );
  }
}

export default ScrollTop;
