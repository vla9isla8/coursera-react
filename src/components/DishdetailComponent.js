import React from "react";
import { CardBody, CardImg, Card, CardTitle, CardText } from "reactstrap";


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

function Comments({ comments }) {
    if (comments) {
        const commentItems = comments.map(({ comment, author, date }, idx) => (
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
        ));

        return <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {commentItems}
            </ul>
        </div>;
    }
    return null;
}

function DishDetail({ dish, comments }) {
    return dish && (
        <div className="container">
            <div className="row">
                <Dish {...dish} />
                <Comments comments={comments} />
            </div>
        </div>
    );
}

export default DishDetail;
