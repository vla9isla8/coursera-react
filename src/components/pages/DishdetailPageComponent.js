import React from 'react';
import Dishdetail from "../DishdetailComponent";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";

function DishdetailPage({dishes, comments, dishId, addComment}) {
    const dish = dishes.find(({id})=> id === dishId);
    const dishComments = dish && comments.filter(comment => comment.dishId === dishId);
    return (
        <>
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr/>
                    </div>
                </div>
            </div>
            <Dishdetail
                dish={dish}
                comments={dishComments}
                addComment={addComment}
            />
        </>
    );
}

export default DishdetailPage;
