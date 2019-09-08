import React, {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle, Col, Label, Row} from "reactstrap";

import Button from "reactstrap/es/Button";
import Modal from "reactstrap/es/Modal";
import ModalHeader from "reactstrap/es/ModalHeader";
import ModalBody from "reactstrap/es/ModalBody";
import {Control, Errors, LocalForm} from "react-redux-form";

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

    handleSubmit = ({author, rating, comment}) => {
        this.props.onAddComment(rating, author, comment);
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


function Dish({ image, name, description }) {
    return <div className="col-12 col-md-5 m-1">
        <Card>
            <CardImg width="100%" src={image} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    </div>;
}

function Comments({comments, onAddComment}) {
    const commentItems = comments ? comments.map(({comment, author, date}, idx) => (
        <li key={idx}>
            <p>{comment}</p>
            <p>-- {author}, {new Intl.DateTimeFormat(
                'en-US',
                {
                    year: "numeric",
                    day: "2-digit",
                    month: 'short'
                }).format(
                new Date(date)
            )}</p>
        </li>
    )) : null;

    return <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
            {commentItems}
        </ul>
        <CommentForm onAddComment={onAddComment}/>
    </div>;
}

function DishDetail({dish, comments, addComment}) {
    const onAddComment = (rating, author, comment) => addComment(dish.id, rating, author, comment);
    return dish && (
        <div className="container">
            <div className="row">
                <Dish {...dish} />
                <Comments comments={comments} onAddComment={onAddComment}/>
            </div>
        </div>
    );
}

export default DishDetail;
