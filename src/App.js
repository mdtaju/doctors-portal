import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AppointmentPage from "./Component/AppointmentPage/AppointmentPage";
import Appointments from "./Component/Appointments/Appointments";
import DashBoard from "./Component/DashBoard/DashBoard";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import Footer from "./Component/HomePage/Footer/Footer";
import HomePage from './Component/HomePage/HomePage';
import Patients from "./Component/Patients/Patients";
import Prescription from "./Component/Prescription/Prescription";
import ScrollToTop from "./Component/ScrollToTop/ScrollToTop";
import Setting from "./Component/Setting/Setting";
import { PrivateRoute } from "./Component/SignUp/Authentication";
import SignUp from "./Component/SignUp/SignUp";


function App(props) {
  return (
    <>
      <Router>
        <ScrollToTop showBelow={250}/>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <PrivateRoute path='/appointment'>
            <AppointmentPage />
            <Footer />
          </PrivateRoute>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <PrivateRoute path='/dashboard'>
            <DashBoard />
          </PrivateRoute>
          <PrivateRoute path='/appointments'>
            <Appointments />
          </PrivateRoute>
          <PrivateRoute path='/patients'>
            <Patients />
          </PrivateRoute>
          <PrivateRoute path='/prescription'>
            <Prescription />
          </PrivateRoute>
          <PrivateRoute path='/setting'>
            <Setting />
          </PrivateRoute>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
