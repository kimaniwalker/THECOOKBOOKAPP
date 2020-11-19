import React from 'react'
import '../../../utils/scss/pages/cookbook/_recipeofweek'

export default function RecipeOfTheWeek(props) {


    return (
        <>
            <main className="featuredRecipe">
                <div className="container pt-4">
                    <div className="row py-4 justify-content-center">
                        <h2>Featured Recipes</h2>
                    </div>
                    <div className="row d-flex flex-wrap py-4 justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 py-4">
                            <div className="row justify-content-center">
                              <div><img id="thumbnail" src="../../../../images/assets/featured.jpg" /></div>  
                            </div>
                            
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 py-4">
                            <div id="centerSm" className="row py-4">
                                <div><h4>Item Name</h4></div>
                            </div>
                            <div id="centerSm" className="row description">
                                <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eligendi voluptate totam et ducimus iusto non, doloremque quasi dolorum, reiciendis praesentium cumque saepe expedita possimus fugiat ipsum cupiditate pariatur? Voluptas.</p></div>
                            </div>
                            <div id="centerSm" className="row">
                                <div><p>Submitted by: Author</p></div>
                            </div>
                            <div id="centerSm" className="row pt-4">
                                <div>
                                    <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>

                        </div>
                        

                    </div>

                    <div className="row justify-content-center py-4">
                        <hr id="line" />
                        </div>
                </div>
            </main>
        </>
    )
}
