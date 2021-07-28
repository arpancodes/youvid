import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddVideo from "./pages/AddVideo";
import Home from "./pages/Home";
import Videopage from "./pages/Videopage";

function App() {
  return (
    <div>
      <h1>
        YouVid <i className="fab fa-youtube-square"></i>
      </h1>
      <Router>
        <Switch>
          <Route path="/video/:videoId">
            <Videopage />
          </Route>
          <Route path="/add">
            <AddVideo />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
