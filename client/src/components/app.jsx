import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login2';
import Logout from './auth/logout';
import Welcome from './welcome';
import BlogAdmin from './admin';
import CheckoutForm from './checkoutForm2';
import RecipeScreen from './screens/Recipe/recipe-screen';
import CreateRecipe from './screens/Recipe/create-recipe';
import RecipeFilter from './screens/Recipe/recipe-filter';
import Profile from './screens/Recipe/profile';
import Subscription from './subscription';
import Register from './auth/register';






class Navigation extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/createrecipe" component={CreateRecipe} />
                        <Route exact path="/recipesearch" component={RecipeFilter} />
                        <Route exact path="/recipe/:id" component={RecipeScreen} />
                        <Route exact path="/subscribe" component={BlogAdmin} />
                        <PrivateRoute exact path="/profile" component={Profile} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/logout" component={Logout} />
                        <Route exact path="/payment" component={CheckoutForm} />
                        <Route exact path="/subscription-signup" component={Subscription} />
                        <Route exact path="/register" component={Register} />

                        

                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;