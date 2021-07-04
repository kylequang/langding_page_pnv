import React, { Component } from "react";
import "../../App.css";

class Form extends Component {
    render() {
        return (
            <div>
                <div id="nhap">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <textarea
                                    name
                                    className="form-control"
                                    id
                                    cols={60}
                                    rows={5}
                                    placeholder="Message"
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input
                                    type="submit"
                                    defaultValue="Send Message"
                                    className="btn btn-primary"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Form;
