import React, { Component } from 'react';
import { Chat } from 'react-bootstrap-icons';
class Comment extends Component {
    render() {
        return (
            <>
                <h5><Chat color="royalblue" size={15} />{this.props.comment}</h5>
            </>
        )
    }
}
export default Comment;