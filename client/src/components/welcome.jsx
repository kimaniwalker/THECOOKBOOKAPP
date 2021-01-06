import React, { Component, Fragment } from 'react';
import '../utils/scss/pages/_welcome.scss';
import Banner from './banner';
import Footer from './footer';
import Header from './header';
import OurMenu from './ourMenu';
import CreateCookbook from './screens/Recipe/create-cookbook';
import CreateRecipe from './screens/Recipe/create-recipe';
import RecipeFilter from './screens/Recipe/recipe-filter';
import RecipeOfTheWeek from './screens/Recipe/recipe-of-the-week';

export default function Welcome() {



  return (
    <Fragment>
      <main className="home">
        <Header color='header' />
        <div className="container-fluid bg">
          
        </div>

      </main>
      <RecipeOfTheWeek />
      <Banner message="Purchase A Copy Of The Kountry Cookin Cookbook"/>
      <OurMenu />
      <Footer />

      
    </Fragment>

  )
}
