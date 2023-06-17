import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  //const apiKey = process.env.REACT_APP_NEWS_API
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <News pageSize={9} country="in" key="general" category="general" />
          </Route>
          <Route exact path="/business">
            <News pageSize={9} country="in" key="business" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News pageSize={9} country="in" key="entertainment" category="entertainment" />
          </Route>
          <Route exact path="/health">
            <News pageSize={9} country="in" key="health" category="health" />
          </Route>
          <Route exact path="/science">
            <News pageSize={9} country="in" key="science" category="science" />
          </Route>
          <Route exact path="/sports">
            <News pageSize={9} country="in" key="sports" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News pageSize={9} country="in" key="technology" category="technology" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App