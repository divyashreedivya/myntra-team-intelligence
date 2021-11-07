import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
// import Home from "./components/Home";
import Profile from "./components/Profile";
import Shop from "./components/Shop";
import Admin from "./components/Admin";
// import BoardUser from "./components/BoardUser";
// import BoardModerator from "./components/BoardModerator";
// import BoardAdmin from "./components/BoardAdmin";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";
import CreateCartGroupForm from "./components/CreateCartGroup";
import CartGroups from "./components/CartGroups";
import CartGroup from "./components/CartGroup";

const App = () => {

  const { user: currentUser } = useSelector((state) => state.auth);
  const {isAdmin} = useSelector((state)=>state.user);
  const dispatch = useDispatch();


  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);


  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Myntra
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/products"} className="nav-link">
                Products
              </Link>
            </li>

            {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )} */}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/cart-groups"} className="nav-link">
                  Cart Groups
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
            
          )}
          {isAdmin && (
              <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin
                </Link>
              </li>
            </div>
            )}
        </nav>

        <div className="container mt-3">
          <Switch>
            {/* <Route exact path={["/", "/home"]} component={Home} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/products" component={Shop}/>
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/create-cart-group" component={CreateCartGroupForm}></Route>
            <Route exact path="/cart-groups" component={CartGroups}/>
            <Route exact path="/cart-groups/:id" component={CartGroup}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
