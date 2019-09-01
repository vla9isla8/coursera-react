import React, {Component} from 'react';
import {Navbar,NavbarBrand} from "reactstrap";
import Menu from './MenuComponent';
import dishes from "../share/dishes";
import DishDetail from './DishdetailComponent';

class MainComponent extends Component {

    state = {
        dishes,
        selectedDish: null
    };
  
    onDishSelect(dishId) {
        const dish = this.state.dishes
            .find(({id})=>id === dishId);
        this.setState({
            selectedDish:dish
        });
    }

    componentDidMount() {
        console.log("Main Component componentDidMount invocked");
    }

    componentDidUpdate(){
        console.log("Main Component componentDidUpdate invocked");
    }

  render() {
    console.log("Main Component render invocked");

    return <React.Fragment>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/" >
            Vla9isla8
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu 
        dishes={this.state.dishes}
        onClick={dishId => this.onDishSelect(dishId)}
      />
      <DishDetail dish={this.state.selectedDish}/>
    </React.Fragment>;
  }
}

export default MainComponent;
