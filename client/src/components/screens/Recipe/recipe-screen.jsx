import React, { useEffect, useState } from 'react'
import { async } from 'regenerator-runtime';
import '../../../utils/scss/pages/cookbook/_recipeScreen'
import Header from '../../header';
import useReactRouter from 'use-react-router';


export default function RecipeScreen(props) {

    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([]);
    const [cookbook, setCookbook] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [directions, setDirections] = useState([]);

    const { match } = useReactRouter();

    useEffect(() => {
        getRecipe();
        getIngredient();
        getDirections();
        getComments();
    }, []);


    const getRecipe = async () => {
        try {
            let res = await fetch('/api/cookbook/' + match.params.id, {
                method: 'GET',
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let data = await res.json();
            console.log(data)
            setCookbook(data);
        } catch (e) {
            console.log(e)
        }
    }

    const getIngredient = async () => {
        try {
            let res = await fetch('/api/cookbook-ingredients/2', {
                method: 'GET',
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let data = await res.json();
            console.log(data.ingredient)
            setIngredients(JSON.parse(data.ingredient));
            console.log(ingredients)
        } catch (e) {
            console.log(e)
        }
    }

    const getComments = async () => {
        
        try {
            let res = await fetch('/api/cookbook-comments/' + match.params.id , {
                method: 'GET',
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let data = await res.json();
            console.log(data)
            setComments(data);
            console.log(comments)
        } catch (e) {
            console.log(e)
        }
    }

    const getDirections = async () => {
        try {
            let res = await fetch('/api/cookbook-directions/2', {
                method: 'GET',
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let data = await res.json();
            console.log(data)
            setDirections(JSON.parse(data.description));
            console.log(directions)
        } catch (e) {
            console.log(e)
        }
    }



    return (
        <>
            <Header />
            <main className="recipeScreen">

                <div id="recipeContainer" className="container">
                    <div className="row d-flex flex-wrap">
                        <div className="col-lg-8">
                            <div className="row py-3 justify-content-center">
                                <h2>{cookbook.name}</h2>
                            </div>
                            <div className="row py-3">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="row justify-content-center py-3">
                                        <i className="fas fa-utensils fa-2x"></i>
                                    </div>
                                    <div className="row justify-content-center">
                                        <h6>{cookbook.serving_size}</h6>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="row justify-content-center py-3">
                                        <i class="fab fa-nutritionix fa-2x"></i>
                                    </div>
                                    <div className="row justify-content-center">
                                        <h6>{cookbook.calories}</h6>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="row justify-content-center py-3">
                                        <i className="fas fa-brain fa-2x"></i>
                                    </div>
                                    <div className="row justify-content-center">
                                        <h6>{cookbook.skill_level}</h6>
                                    </div>

                                </div>

                            </div>

                            <div className="row py-3">
                                <hr id="line" />
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
                        </div>
                        <div className="col-lg-4 bg-light">
                            <div className="row justify-content-center">
                                <h2>Ingredients</h2>
                            </div>
                            <div className="row justify-content-center py-4">
                               
                                <div>{ingredients.map((item) =>

                                   <div className="py-2">{item}</div>

                                )}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row py-3 d-flex flex-wrap">
                        <div className="col-lg-8 col-md-8 col-sm-9">
                            <hr id='commentline' />
                            <h5>Leave A Comment</h5>
                            <hr id='commentline' />
                        </div>

                    </div>

                    <div className="row py-3">
                        <div className="col-lg-8 col-md-8 col-sm-8">




                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Submit</span>
                                </div>
                                <textarea onChange={(e) => setComment(e.target.value)}
                                    value={comment}
                                    className="form-control" aria-label="With textarea"></textarea>
                            </div>

                            <div className="row pt-5">
                            <i className="far fa-comment-alt fa-2x"></i>
                            </div>

                            <div className="row py-3">
                                <h5>Comments</h5>
                            </div>


                            <div className="row py-4">
                                <div className="col-lg-12 col-md-12 col-2m-12">
                                    <div className="row py-3">
                                        <span><div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, accusantium repellendus nulla atque, amet in assumenda consequatur autem quasi maxime cum at natus quo architecto quibusdam consequuntur, esse fugiat nobis.</p></div></span>
                                    </div>
                                    <div className="row justify-content-between">
                                       
                                       
                                       
                                        <span><div><p>Date</p></div></span>

                                        <span><div><p>Submitted By: John Davidson</p></div></span>
                                    </div>

                                    <hr id='commentline' />
                                </div>


                            </div>
                        </div>

                    </div>



                </div>


            </main>
        </>
    )
}
