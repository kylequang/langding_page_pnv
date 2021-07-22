import React, { Component } from "react";
import './head.scss';
import ModalVideo from 'react-modal-video'
import back from "../../components/Images/Slide/background.jpg";
import {  PlayBtn } from 'react-bootstrap-icons';
import { Container, Image } from "react-bootstrap";
class Head extends Component {
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
    
      openModal () {
        this.setState({isOpen: true})
      }
    
      render () {
        return (
          <div>
              <Container fluid  >
                <Image
                        src={back}
                        alt="back"
                        height="50%"
                        width="100%"
                    />
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='gkLdO8I76LI' onClose={() => this.setState({isOpen: false})} />
                <a onClick={this.openModal}><PlayBtn className="icon" color="royalblue" size={100} /></a>
             </Container>
          </div>
        )
      }
}
export default Head;
