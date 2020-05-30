import React, { useEffect, useState } from "react";

import "./App.css";
import "./index.css";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Axios from "axios";
import { API_URL } from "./supports/ApiUrl";
import ProductDetail from "./pages/ProductDetails";
import FooterPage from "./components/Footer";
import About from "./pages/About";
import Shop from "./pages/Shop";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route
          path="/productdetail/:productid"
          exact
          component={ProductDetail}
        />
        {/* <Route path="/*" component={} /> */}
        <Route path="/about" exact component={About} />
        <Route path="/shop" exact component={Shop} />
      </Switch>
      <FooterPage />
    </div>
  );
}

export default App;
