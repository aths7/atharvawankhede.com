import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage3";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/essays" component={Bloglist} exact />
        <Route path="/quotes" component={Bloglist} exact />
        <Route
          path="/essays/essay-details/:id/:title"
          component={BlogDetails}
        />
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
