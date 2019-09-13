import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './pages/HomePageComponent';
import MenuPage from './pages/MenuPageComponent';
import ContactPage from './pages/ContactPageComponent';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import DishdetailPage from './pages/DishdetailPageComponent';
import About from './pages/AboutusPageComponent';
import {connect} from "react-redux";
import {addComment, fetchComments, fetchDishes, fetchPromos, postComment} from "../redux/ActionCreators";
import {actions} from "react-redux-form";

class MainComponent extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchPromos();
        this.props.fetchComments();
    }

    render() {
        return <React.Fragment>
            <Header />
            <Switch>
                <Route 
                    path="/home" 
                    component={()=> <HomePage
                        dishes={this.props.dishes}
                        dishesLoading={this.props.dishesLoading}
                        dishesErrMess={this.props.dishesErrMess}
                        leaders={this.props.leaders}
                        promotions={this.props.promotions}
                        promotionsLoading={this.props.promotionsLoading}
                        promotionsErrMess={this.props.promotionsErrMess}
                    /> }
                />
                <Route
                    exact
                    path="/contactus"
                    component={() => <ContactPage resetFeedbackForm={this.props.resetFeedbackForm}/>}
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
                        dishesLoading={this.props.dishesLoading}
                        dishesErrMess={this.props.dishesErrMess}
                        dishes={this.props.dishes}
                    />}
                />
                <Route 
                    exact
                    path="/menu/:dishId"
                    component={({match}) => <DishdetailPage
                        dishes={this.props.dishes}
                        isLoading={this.props.dishesLoading || this.props.commentsLoading}
                        dishesErrMess={this.props.dishesErrMess}
                        comments={this.props.comments}
                        commentsErrMess={this.props.commentsErrMess}
                        dishId={parseInt(match.params.dishId)}
                        addComment={this.props.postComment}
                    />}
                />
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </React.Fragment>;
    }
}

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes.dishes,
        dishesLoading: state.dishes.isLoading,
        dishesErrMess: state.dishes.errMess,
        promotions: state.promotions.promotions,
        promotionsLoading: state.promotions.isLoading,
        promotionsErrMess: state.promotions.errMess,
        leaders: state.leaders,
        comments: state.comments.comments,
        commentsLoading: state.comments.isLoading,
        commentsErrMess: state.comments.errMess,
    }
};

const mapDispatchToProps = {
    postComment,
    fetchDishes,
    fetchPromos,
    fetchComments,
    resetFeedbackForm: () => actions.reset('feedback')
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
