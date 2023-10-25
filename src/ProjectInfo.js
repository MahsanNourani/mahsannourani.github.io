import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

export default class ProjectInfo extends Component {

    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false
        }
    }
    handleShow() {
        console.log(this.state)
        this.setState({ show: true })
    }
    handleClose() {
        this.setState({ show: false })
    }

    render() {
        const project = this.props.project;
        return (
            <Modal show={this.state.show} onHide={this.handleClose} centered dialogClassName="project-info">
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "var(--red-cabin)" }}>{project.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row mb-3">
                        <div className="col-md-8 col-12 mx-auto">
                            <img className="img-fluid" src={require(`../public/images/${project.image}`)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-8 col-12 mx-auto text-center">
                            {this.props.links(project.links)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="text-justify">{project.abstract}</p>
                        </div>
                    </div>

                </Modal.Body>
                {/* <Modal.Footer>
                    <button className="btn btn-secondary" onClick={this.handleClose}>
                        Close
                    </button>
                    <button className="btn btn-primary" onClick={this.handleClose}>
                        Save Changes
                    </button>
                </Modal.Footer> */}
            </Modal>
        )
    }
}
