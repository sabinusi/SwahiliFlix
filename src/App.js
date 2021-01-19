import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store/store";

//import pages
const Login = React.lazy(() => import("./pages/Login"));
const Landing = React.lazy(() => import("./pages/Landing"));
const Language = React.lazy(() => import("./pages/Language"));
const Signup = React.lazy(() => import("./pages/Signup"));
const MobileConfirmation = React.lazy(() =>
  import("./pages/MobileConfirmation")
);
const Otp = React.lazy(() => import("./pages/Otp"));
const Subscribe = React.lazy(() => import("./pages/Subscribe"));
const Payment = React.lazy(() => import("./pages/PaymentGateway"));
const MobilePayment = React.lazy(() => import("./pages/MobilePayment"));
const CardPayment = React.lazy(() => import("./pages/CardPayment"));
const MoviePlayer = React.lazy(() => import("./pages/MoviePlayer"));
const LiveEventPlayer = React.lazy(() => import("./pages/LiveEventPlayer"));
const SeriesPlayer = React.lazy(() => import("./pages/SeriesPlayer"));
//import pages

const loading = () => <p>loading</p>;

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <PersistGate persistor={persistor}>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route
                exact
                path="/login"
                name="login page"
                render={(props) => <Login {...props} />}
              />
              <Route
                exact
                path="/cardPayment"
                name="cardPayment"
                render={(props) => <CardPayment {...props} />}
              />
              <Route
                exact
                path="/seriesPlayer"
                name="SeriesPlayer"
                render={(props) => <SeriesPlayer {...props} />}
              />
              <Route
                exact
                path="/liveEventPlayer"
                name="liveEventPlayer"
                render={(props) => <LiveEventPlayer {...props} />}
              />
              <Route
                exact
                path="/moviePlayer"
                name="moviePlayer"
                render={(props) => <MoviePlayer {...props} />}
              />
              <Route
                exact
                path="/mobilePayment"
                name="mobilePayment"
                render={(props) => <MobilePayment {...props} />}
              />
              <Route
                exact
                path="/payment"
                name="payment"
                render={(props) => <Payment {...props} />}
              />
              <Route
                exact
                path="/subscription"
                name="subscription"
                render={(props) => <Subscribe {...props} />}
              />
              <Route
                exact
                path="/otp"
                name="otp"
                render={(props) => <Otp {...props} />}
              />
              <Route
                exact
                path="/confirmMobile"
                name="MobileConfirmation"
                render={(props) => <MobileConfirmation {...props} />}
              />
              <Route
                exact
                path="/signup"
                name="Signup"
                render={(props) => <Signup {...props} />}
              />
              <Route
                exact
                path="/language"
                name="language"
                render={(props) => <Language {...props} />}
              />

              <Route
                exact
                path="/Home"
                name="Home"
                render={(props) => <Landing {...props} />}
              />

              <Route
                path="/"
                name="Default"
                render={(props) => <div>home</div>}
              />
              <Route />
            </Switch>
          </React.Suspense>
        </PersistGate>
      </HashRouter>
    </Provider>
  );
}

export default App;
