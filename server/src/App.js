import React, { } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LeftBar from "./components/LeftBar";
import TopBar from './components/TopBar';
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
function App() {
  const [auth, setAuth] = React.useState({ username: "", password: "" })
  const [sideOn, setSideOn] = React.useState(false)
  const connected = () => {
    return (auth.username === "achraf" && auth.password === "achraf") | 1
  }
  // setInterval(() => {
  //   return
  //   setAuth({
  //     username: 'achraf', password: "achraf"
  //   })
  // }, 2500)
  const openSidebar = () => {
    setSideOn(true);
  }
  const close = () => {
    setSideOn(false);

  }
  return (
    <Router>
      <TopBar auth={connected} openSidebar={openSidebar} />
      <LeftBar show={sideOn} close={close} />
      <Switch className="switch">
        <Route path="/" exact>
          <div className="app">
            <h1>
              <center>
                {connected() ? <Home /> : <Redirect to="/login" />}
              </center>
            </h1>
          </div>
        </Route>
        <Route path="/login" exact>
          <div className="app">
            <h1>
              <center>
                {connected() ? <Redirect to="/" /> : <Login />}
              </center>
            </h1>
          </div>
        </Route>
        <Route path="/register" exact>
          <div className="app">
            <h1>
              <center>
                {connected() ? <Redirect to="/" /> : <Register />}
              </center>
            </h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
