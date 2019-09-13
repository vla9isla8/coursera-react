import React from "react";
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import Loading from "./LoadingComponent";
import {baseUrl} from "../share/baseUrl";

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return <Loading/>;
    }

    if (errMess) {
        return <h4>{errMess}</h4>;
    }

    return item ? (
        <Card>
            <CardImg src={baseUrl + item.image} alt={item.name}/>
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    ) : null;

}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} errMess={props.dishesErrMess} isLoading={props.dishesLoading}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} errMess={props.promotionsErrMess}
                                isLoading={props.promotionsLoading}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;
