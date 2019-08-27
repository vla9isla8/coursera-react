import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,NavbarBrand, NavItem, NavLink} from "reactstrap";
import Menu from './components/Menu';
import dishes from "./dishes";

class App extends Component {

  state = {
    dishes
  };

  render() {
    return <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/" >
            Vla9isla8
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu 
        dishes={this.state.dishes}
        
      />
    </div>;
  }
}

export default App;
