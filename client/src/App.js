import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
// import FarmersMarkets from "./pages/FarmersMarkets";
import Notes from "./components/Notes";
import User from "./pages/User";
import NoMatch from "./pages/NoMatch";
import history from "./utils/history";
import Greeting from "./components/Greeting";

const App = () => {

  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]} component={Greeting} />
            
          <Route exact path="/notes" component={Notes} />
           
          <Route exact path="/user" component={User} />

          <Route component={NoMatch}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
