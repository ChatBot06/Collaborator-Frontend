import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignIn from "../pages/Signin/index";
import SignUp from "../pages/SignUp/index";
import Home from "../pages/Home/index";
import Profile from "../components/Profile/Profile";
import Dashboard from "../components/Dashboard/Dashboard";

const Routes=()=>{
    return(
<Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signin"  component={SignIn} />
    <Route path="/signup"  component={SignUp} />
    <Route path="/profile"  component={Profile} />
    <Route path="/dashboard"  component={Dashboard} />
  </Switch>
)
}

export default Routes;