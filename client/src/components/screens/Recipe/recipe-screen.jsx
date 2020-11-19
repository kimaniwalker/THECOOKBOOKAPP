import React, { useState } from 'react'
import '../../../utils/scss/pages/cookbook/_recipeScreen'
import Header from '../../header';
export default function RecipeScreen(props) {

    const [comment, setComment] = useState('')
    const [commentList, setCommentList] = useState([]);


    return (
        <>
            <Header />
            <main className="recipeScreen">
            
                <div id="recipeContainer" className="container">
                    <div className="row d-flex flex-wrap">
                        <div className="col-lg-8">
                            <div className="row py-3">
                                <h2>Name</h2>
                            </div>
                            <div className="row py-3">
                                <h4>Serving Size</h4>
                            </div>
                            <div className="row py-3">
                                <h4>Skill Level</h4>
                            </div>
                            <div className="row py-3">
                                <h4>Tags</h4>
                            </div>

                            <div className="row py-3">
                                <h4>Calories</h4>
                            </div>
                            <div className="row py-3">
                                <h4>Ingredients</h4>
                            </div>
                            <div className="row py-3">
                                <h4>Directions</h4>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint minima perferendis illo qui ducimus facilis, aliquid eligendi provident vero labore vel voluptatem. Exercitationem tempora, fugit molestiae et saepe incidunt necessitatibus.</p>
                                </div>
                            </div>
                            <div className="row py-3">
                                <h4>Images</h4>
                            </div>
                            <div className="row py-3">
                                <h4>Comments</h4>
                            </div>
                            <div className="row py-3">

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Submit</span>
                                    </div>
                                    <textarea onChange={(e) => setComment(e.target.value)}
                                    value={comment}
                                     className="form-control" aria-label="With textarea"></textarea>
                                </div>
                            </div>
                            <div className="row py-3">
                                <span><div><h5>Date</h5></div></span>
                                <span><div><h5>Name</h5></div></span>  
                                <span><div><p>Message</p></div></span>
                                
                            </div>
                        </div>
                        <div className="col-lg-4 bg-light">
                            <div className="row">
                                <h2>Featured Recipes</h2>
                            </div>

                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}
