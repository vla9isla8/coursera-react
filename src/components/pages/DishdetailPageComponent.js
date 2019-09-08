import React from 'react';
import Dishdetail from "../DishdetailComponent";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";
import Loading from "../LoadingComponent";

function DishdetailPage({dishes, dishesLoading, dishesErrMess, comments, dishId, addComment}) {
    if (dishesLoading) {
        return <div className="container">
            <div className="row">
                <Loading/>
            </div>
        </div>
    }

    if (dishesErrMess) {
        return <div className="container">
            <div className="row">
                <h4>{dishesErrMess}</h4>
            </div>
        </div>
    }
    const dish = dishes.find(({id})=> id === dishId);

    if (!dish) {
        return (
            <div className="container">
                <div className="row">
                    <h4>Not Found</h4>
                </div>
            </div>
        );
    }


    const dishComments = comments.filter(comment => comment.dishId === dishId);
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
