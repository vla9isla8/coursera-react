import Button from "reactstrap/es/Button";
import React, {Component} from "react";
import Modal from "reactstrap/es/Modal";
import ModalHeader from "reactstrap/es/ModalHeader";
import ModalBody from "reactstrap/es/ModalBody";
import {Control, Errors, LocalForm} from "react-redux-form";
import {Col, Label, Row} from "reactstrap";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => val && val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formOpen: false
        }
    }

    toggleForm = () => {
        this.setState(({formOpen}) => ({
            formOpen: !formOpen
        }));
    };

    handleSubmit = (values) => {
        alert(JSON.stringify(values));
    };

    render() {
        return (
            <React.Fragment>
                <Button outline onClick={this.toggleForm}>
                    <span className="fa fa-edit"/> Submit Comment
                </Button>
                <Modal isOpen={this.state.formOpen} fade toggle={this.toggleForm}>
                    <ModalHeader toggle={this.toggleForm}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select
                                        model=".rating"
                                        id="rating"
                                        name="rating"
                                        className="form-control"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={2}>Author</Label>
                                <Col md={10}>
                                    <Control.text
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }}
                                        model=".author"
                                        id="author"
                                        name="author"
                                        className="form-control"
                                        placeholder="Author"
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be greater than 2 characters",
                                            maxLength: "Must be 15 characters or less"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".comment"
                                        className="form-control"
                                        id="comment"
                                        name="comment"
                                        rows="6"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button color="primary" type="submit">Send Comment</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default CommentForm;
