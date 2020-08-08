import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Donors from "../components/donors/Donors";
import SignIn from "../components/auth/SignIn";
import NotFound from "../components/pages/NotFound";
import AddDonor from "../components/donors/AddDonor";
import PrivacyPolicy from "../components/pages/PrivacyPolicy";
import LoadingPage from "../components/pages/LoadingPage";
import { Provider } from "react-redux";
import { startSetDonor } from "../store/actions/donorActions";
import { login, logout } from "../store/actions/authActions";
import history from "history/browser";
import { firebase } from "../service/firebase";
import "../service/firebase";
import store from "../store/store";
import PrivateRoute from "../router/PrivateRoute";

import "./main.scss";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <div className="App">
          <Switch>
            <Route exact={true} path="/" component={SignIn} />
            <PrivateRoute path="/home" component={Donors} />
            <PrivateRoute path="/donor/profile" component={AddDonor} />
            {/*  <PrivateRoute path="/donor/edit" component={EditDonor} /> */}
            <PrivateRoute path="/privacy" component={PrivacyPolicy} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<LoadingPage />, document.getElementById("root"));
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    store.dispatch(startSetDonor()).then(() => {
      ReactDOM.render(<App />, document.getElementById("root"));
    });
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/home");
      window.location.reload(false);
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
