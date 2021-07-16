import React, { Component } from "react";
import "../../App.css";

class Map extends Component {
  render() {
    return (
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.632581836217!2d108.24124506284689!3d16.059807279573743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421836ed15dfc9%3A0x99c3cc369a33576c!2sPasserelles%20num%C3%A9riques%20Vietnam!5e1!3m2!1svi!2s!4v1624767917965!5m2!1svi!2s"
          width={850}
          height={550}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
        
      </div>
    );
  }
}

export default Map;
