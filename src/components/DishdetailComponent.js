import React, {Component} from "react";
import {CardBody,CardImg,Card,CardTitle,CardText} from "reactstrap";

class DishDetail extends Component {

    renderComments(comments) {
        if (comments) {

            const commentItems = comments.map(({comment,author})=>(
                <li>
                    <p>{comment}</p>
                    <p>-- {author}</p>
                </li>
            ));

            return <ul className="list-unstyled">
                {commentItems}
            </ul>;
        }
    }

    render() {
        const dish = this.props;
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <p>{this.renderComments(dish.comments)}</p>
                </div>
            </div>
        );
    }
}

export default DishDetail;
