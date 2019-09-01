import React, {Component} from "react";
import {CardBody,CardImg,Card,CardTitle,CardText} from "reactstrap";

class DishDetail extends Component {

    renderDish(dish) {
        return <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    }

    renderComments(comments) {
        if (comments) {
            const commentItems = comments.map(({comment,author,date})=>(
                <li>
                    <p>{comment}</p>
                    <p>-- {author}, {new Intl.DateTimeFormat(
                        'en-US',
                        {
                            year:"numeric",
                            day: "2-digit",
                            month: 'short'
                        }).format(
                            new Date(date)
                        )}</p>
                </li>
            ));

            return <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentItems}
                </ul>
            </div>;
        }
    }

    render() {
        const {dish} = this.props;
        return dish && (
            <div className="container">
                <div className="row">
                    {this.renderDish(dish)}
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;
