import React, { Component } from 'react';
import Menu from './MenuComponent';
import dishes from "../share/dishes";
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class MainComponent extends Component {

    state = {
        dishes,
        selectedDish: null
    };

    onDishSelect(dishId) {
        const dish = this.state.dishes
            .find(({ id }) => id === dishId);
        this.setState({
            selectedDish: dish
        });
    }

    render() {
        return <React.Fragment>
            <Header />
            <Menu
                dishes={this.state.dishes}
                onClick={dishId => this.onDishSelect(dishId)}
            />
            <DishDetail dish={this.state.selectedDish} />
            <Footer/>
        </React.Fragment>;
    }
}

export default MainComponent;
