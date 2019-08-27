import React, {Component} from "react";
import {CardBody,CardImg,Card,CardImgOverlay,CardTitle,CardText} from "reactstrap";

class Menu extends Component {

    state = {
        selectedDish: null
    }

    onDishSelect(dish) {
        this.setState({selectedDish:dish})
    }

    renderDish(dish) {
        if (dish) {
            return <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        ));
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    };
}
export default Menu;
