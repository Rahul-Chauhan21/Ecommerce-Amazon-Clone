import React, { useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { auth } from "./firebase";
import { useDataLayerValue } from "./DataLayer";

const promise = loadStripe(
  "pk_test_51HQ7v0Jl838outwVYiMsEd9VB1yHsuykpEfA53kdcijr7NTXqnNIIHgG6R9J5PHJgYaDt8Vx2yKFy8Muk8kTrhSZ00tntZaxaN"
);

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
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
