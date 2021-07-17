import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Auth } from "./Auth";
import Home from "./pages/Home";
import Private from "./pages/Private";
import Admin from "./pages/Admin";

function App() {
  return (
    <Auth>
      <Router>
        <Switch>
          <Private path="/admin/dashboard" component={Admin} />
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Auth>
  );
}

export default App;
