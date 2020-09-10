import React, { useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import { useDataLayerValue } from "./DataLayer";
function App() {
  const [{}, dispatch] = useDataLayerValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
