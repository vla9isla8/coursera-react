import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './components/MainComponent';

class App extends Component {

  componentDidMount() {
    console.log("App Component componentDidMount invocked");
  }

  componentDidUpdate(){
      console.log("App Component componentDidUpdate invocked");
  }

  render() {
    console.log("App Component render invocked");

    return <Main/>;
  }
}

export default App;
