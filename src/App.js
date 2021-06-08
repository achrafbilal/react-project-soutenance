import React, { } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LeftBar from "./components/LeftBar";
import TopBar from './components/TopBar';
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import { AuthProvider } from './contexts/Auth'
import app from './firebase'
import { useHistory } from 'react-router-dom'
function App() {
  const history = useHistory();
  const [auth, setAuth] = React.useState(null)
  const [sideOn, setSideOn] = React.useState(false)
  const connected = () => {
    return (auth !== null)
  }

  const openSidebar = () => {
    setSideOn(true);
  }
  const close = () => {
    setSideOn(false);
  }
  const logout = () => {

    app.auth().signOut()
    history.push('/login')
    //setAuth(null)
  }
  return (
    <AuthProvider>
      <Router>
        <TopBar auth={connected} openSidebar={openSidebar} logout={logout} />
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
                  {connected() ? <Redirect to="/" /> : <Login setAuth={setAuth} />}
                </center>
              </h1>
            </div>
          </Route>
          <Route path="/register" exact>
            <div className="app">={setAuth}
              <h1>
                <center>
                  {connected() ? <Redirect to="/" /> : <Register setAuth={setAuth} />}
                </center>
              </h1>
            </div>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
