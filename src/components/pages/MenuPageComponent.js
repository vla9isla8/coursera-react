import React from "react";
import {Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";
import Loading from "../LoadingComponent";
import {baseUrl} from "../../share/baseUrl";

function RenderMenuItem({ dish }) {
    return <Card>
        <Link to={`/menu/${dish.id}`} >
            <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Link>
    </Card>;
}


function MenuPage({dishes, dishesLoading, dishesErrMess}) {
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
    const menu = dishes.map((dish) => (
        <div key={dish.id} className="col-12 col-md-5 m-1">
            <RenderMenuItem dish={dish} />
        </div>
    ));

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                       Menu
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}
export default MenuPage;
