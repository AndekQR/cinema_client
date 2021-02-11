import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import MainPage from "./components/Layout/MainPage";
import Reservation from "./components/reservation/Reservation";
import store from "./redux/store";
import Header from "./components/Layout/Header";
import Movies from "./components/movies/Movies";
import Login from "./components/Content/UserManagment/Login";
import PriceList from "./components/priceList/PriceList";
import Info from "./components/info/Info";
import Hall from "./components/seat/Hall";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/repertuar" component={Movies} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/pricelist" component={PriceList} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/test" component={Hall} />
        </Router>
      </Provider>
    );
  }
}

export default App;
