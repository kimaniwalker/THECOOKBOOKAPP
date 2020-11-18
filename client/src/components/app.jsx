import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login2';
import Logout from './auth/logout';
import Welcome from './welcome';
import BlogAdmin from './admin';
import CheckoutForm from './checkoutForm2';
import RecipeScreen from './screens/Recipe/recipe-screen';






class Navigation extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/recipe" component={RecipeScreen} />
                        <PrivateRoute path="/admin" component={BlogAdmin} />

                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route exact path="/payment" component={CheckoutForm} /> 
                        

                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;