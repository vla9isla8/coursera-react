import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './pages/HomePageComponent';
import MenuPage from './pages/MenuPageComponent';
import ContactPage from './pages/ContactPageComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import DishdetailPage from './pages/DishdetailPageComponent';
import About from './pages/AboutusPageComponent';
import {connect} from "react-redux";

class MainComponent extends Component {

    render() {

        return <React.Fragment>
            <Header />
            <Switch>
                <Route 
                    path="/home" 
                    component={()=> <HomePage 
                        dishes={this.props.dishes}
                        leaders={this.props.leaders}
                        promotions={this.props.promotions}
                    /> }
                />
                <Route 
                    exact
                    path="/contactus"
                    component={ContactPage} 
                />
                <Route 
                    exact
                    path="/aboutus"
                    component={() => <About
                        leaders={this.props.leaders}
                    />} 
                />
                <Route 
                    exact
                    path="/menu"
                    component={() => <MenuPage
                        dishes={this.props.dishes}
                    />}
                />
                <Route 
                    exact
                    path="/menu/:dishId"
                    component={({match}) => <DishdetailPage
                        dishes={this.props.dishes}
                        comments={this.props.comments}
                        dishId={parseInt(match.params.dishId)}
                    />}
                />
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </React.Fragment>;
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default withRouter(connect(mapStateToProps)(MainComponent));
