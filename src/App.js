import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,NavbarBrand, NavItem, NavLink} from "reactstrap";
import Menu from './components/Menu';
function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/" >
            Vla9isla8
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
