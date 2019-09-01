import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './pages/HomePageComponent';
import MenuPage from './pages/MenuPageComponents';
import ContactPage from './pages/ContactPageComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import {DISHES,COMMENTS,LEADERS,PROMOTIONS} from "../share/dishes";

class MainComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
        }
    }

    render() {

        return <React.Fragment>
            <Header />
            <Switch>
                <Route 
                    path="/home" 
                    component={()=> <HomePage 
                        dishes={this.state.dishes}
                        leaders={this.state.leaders}
                        promotions={this.state.promotions}
                    /> }
                />
                <Route 
                    exact
                    path="/contactus"
                    component={ContactPage} 
                />
                <Route 
                    exact
                    path="/menu"
                    component={() => <MenuPage
                        dishes={this.state.dishes}
                        comments={this.state.comments}
                    />}
                />
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </React.Fragment>;
    }
}

export default MainComponent;
