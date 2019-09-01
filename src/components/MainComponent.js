import React, { Component } from 'react';
import Menu from './MenuComponent';
import dishes from "../share/dishes";
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

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

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return <React.Fragment>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu 
                    dishes={this.state.dishes} 
                    onClick={(dishId) => this.onDishSelect(dishId)} />}  />
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </React.Fragment>;
    }
}

export default MainComponent;
