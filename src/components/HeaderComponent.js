import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, 
    Collapse, NavItem, Jumbotron, Form, FormGroup, Label, Input, Button, 
    Modal, ModalBody, ModalHeader } from "reactstrap";
import {NavLink} from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isLoginFormOpen: false
        }
        this.toggleLoginForm = this.toggleLoginForm.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    
    toggleLoginForm() {
        this.setState(({isLoginFormOpen}) => ({
            isLoginFormOpen: !isLoginFormOpen
        }));
    }

    toggleNav(){
        this.setState(({isNavOpen}) => ({
            isNavOpen: !isNavOpen
        }));
    }

    handleLogin(event) {
        event.preventDefault();
        alert(`Username:  ${this.username.value}, Password:  ${this.password.value}, Remember:  ${this.remember.checked}`);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand 
                            className="mr-auto" 
                            href="/" >
                                <img 
                                    src="/assets/images/logo.png" 
                                    height="30" 
                                    width="30" 
                                    alt="Ristorante Con Fusion" />
                            </NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            <span className="fa fa-home fa-lg"></span> Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/aboutus">
                                            <span className="fa fa-info fa-lg"></span> About Us
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/menu">
                                            <span className="fa fa-list fa-lg"></span> Menu
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            <span className="fa fa-address-card fa-lg"></span> Contact Us
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <Button outline onClick={this.toggleLoginForm}>
                                            <span className="fa fa-sign-in fa-lg"></span> Login
                                        </Button>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="contianer">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal 
                    isOpen={this.state.isLoginFormOpen}
                    toggle={this.toggleLoginForm} >
                    <ModalHeader toggle={this.toggleLoginForm}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input)=> this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input)=> this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input)=> this.remember = input}/>
                                    Remeber me
                                </Label>
                            </FormGroup>
                            <Button type="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}
export default Header;
