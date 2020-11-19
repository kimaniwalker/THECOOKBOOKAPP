import React, { Component, Fragment } from 'react';
import '../utils/scss/pages/_welcome.scss';
import Banner from './banner';
import Header from './header';
import CreateCookbook from './screens/Recipe/create-cookbook';
import CreateRecipe from './screens/Recipe/create-recipe';
import RecipeFilter from './screens/Recipe/recipe-filter';
import RecipeOfTheWeek from './screens/Recipe/recipe-of-the-week';

export default function Welcome() {



  return (
    <Fragment>
      <main className="home">
        <Header />
        <div className="container-fluid bg">
          
        </div>


        {/* <CreateRecipe /> */}
      </main>
      <RecipeOfTheWeek />
      <Banner message={'Submit A Recipe'} />
      <RecipeFilter />
    </Fragment>

  )
}
