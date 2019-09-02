import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Main from './components/MainComponent';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {ConfigureStore} from "./redux/configureStore";

const store = ConfigureStore();

class App extends Component {

  render() {
    return <BrowserRouter>
      <Provider store={store}>
        <Main/>
      </Provider>
    </BrowserRouter>;
  }
}

export default App;
