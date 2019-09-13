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
import {
    fetchComments,
    fetchDishes,
    fetchLeaders,
    fetchPromos,
    postComment,
    postFeedback
} from "../redux/ActionCreators";
import {actions} from "react-redux-form";
import {CSSTransition, TransitionGroup} from "react-transition-group";

class MainComponent extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchPromos();
        this.props.fetchComments();
        this.props.fetchLeaders();
    }

    render() {
        return <React.Fragment>
            <Header />
            <TransitionGroup>
                <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                    <Switch>
                        <Route
                            path="/home"
                            component={() => <HomePage
                                dishes={this.props.dishes}
                                dishesLoading={this.props.dishesLoading}
                                dishesErrMess={this.props.dishesErrMess}
                                leaders={this.props.leaders}
                                leadersLoading={this.props.leadersLoading}
                                leadersErrMess={this.props.leadersErrMess}
                                promotions={this.props.promotions}
                                promotionsLoading={this.props.promotionsLoading}
                                promotionsErrMess={this.props.promotionsErrMess}
                            />}
                        />
                        <Route
                            exact
                            path="/contactus"
                            component={() => <ContactPage
                                resetFeedbackForm={this.props.resetFeedbackForm}
                                sendFeedback={this.props.postFeedback}
                            />}
                        />
                        <Route
                            exact
                            path="/aboutus"
                            component={() => <About
                                leaders={this.props.leaders}
                                isLoading={this.props.leadersLoading}
                                errMess={this.props.leadersErrMess}
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
                </CSSTransition>
            </TransitionGroup>
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
        leaders: state.leaders.leaders,
        leadersLoading: state.leaders.isLoading,
        leadersErrMess: state.leaders.errMess,
        comments: state.comments.comments,
        commentsLoading: state.comments.isLoading,
        commentsErrMess: state.comments.errMess,
    }
};

const mapDispatchToProps = {
    postComment,
    postFeedback,
    fetchDishes,
    fetchPromos,
    fetchComments,
    fetchLeaders,
    resetFeedbackForm: () => actions.reset('feedback')
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
