import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Analytics from "./components/Analytics";
import Navbar from "./components/Nav/Navbar";
import Shop from "./components/Shop";
import StockRoom from "./components/StockRoom";

export default function App() {
  return (
    <>
    <div className="header">
        <Router>
        <Navbar/>
          <Switch>
            <Route  path="/shop" component={Shop}/>
            <Route  path="/analytics" component={Analytics}/>
            <Route  path="/" extact component={StockRoom}/>
          </Switch>
        </Router>
    </div>

    </>
  );
}