import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

const CategoryPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.match.params.category} PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/:category" component={CategoryPage} />
      </Switch>
    </div>
  );
}

export default App;
