import React, { useEffect, useState } from 'react'

import '../../../utils/scss/pages/cookbook/_recipeScreen'
import Header from '../../header';
import Footer from '../../footer';
import useReactRouter from 'use-react-router';



export default function RecipeScreen(props) {

    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([]);
    const [cookbook, setCookbook] = useState([]);
    const [id, setId] = useState('')
    const [ingredients, setIngredients] = useState([]);
    const [directions, setDirections] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [commentsPerPage, setCommentsPerPage] = useState(3);

    const { match } = useReactRouter();

    useEffect(() => {
        getRecipe();
        getIngredient();
        getDirections();
        getComments();
    }, [currentPage]);


    const getRecipe = async () => {
        try {
            let res = await fetch('/api/cookbook/' + match.params.id, {
                method: 'GET',
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let data = await res.json();
            console.log(data)
            setCookbook(data);
            setId(data.id)
        } catch (e) {
            console.log(e)
        }
    }

    const getIngredient = async () => {
        try {
            let res = await fetch('/api/cookbook-ingredients/' + match.params.id, {
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
            let res = await fetch('/api/cookbook-comments/' + match.params.id, {
                method: 'GET',
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let data = await res.json();
            console.log(data)
            setComments(data.slice(currentPage , commentsPerPage));
            console.log(comments)
        } catch (e) {
            console.log(e)
        }
    }

    const getDirections = async () => {
        try {

            let res = await fetch('/api/cookbook-directions/' + match.params.id, {
                method: 'GET',
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let data = await res.json();
            console.log(data)
            setDirections(JSON.parse(data.description));



        } catch (e) {
            console.log(e)
        }
    }
    const leaveComment = async (e) => {
        
        let commentObject = {
            comment: comment,
            cookbookId: match.params.id,
            user: 'Kountry Cookin'
        }

        console.log(commentObject)
        
        try {

            let res = await fetch('/api/cookbook-comments' , {
                method: 'POST',
                body: JSON.stringify(commentObject),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let data = await res.json();
            console.log(data)
            setComment('');
           

        } catch (e) {
            console.log(e)
        }
    }

    /* Helper Functions */
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
        setCommentsPerPage(commentsPerPage + 1)
        

    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
        setCommentsPerPage(commentsPerPage - 1)
        
    };

   



    return (
        <>
            <Header color={'header-dark'} />
            <main className="recipeScreen">

                <div id="recipeContainer" className="container">
                    <div className="row d-flex flex-wrap">
                        <div className="col-lg-8">
                            <div className="row py-3 justify-content-center bg-danger">
                                <h2>{cookbook.name}</h2>
                            </div>
                            <div className="row py-3 bg-light">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="row text-center py-3">
                                        <i id="utinsils" className="fas fa-utensils fa-2x"></i>
                                    </div>
                                    <div className="row text-center">
                                        <h6>Servings : {cookbook.serving_size}</h6>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="row text-center py-3">
                                        <i id="apple" class="fab fa-nutritionix fa-2x"></i>
                                    </div>
                                    <div className="row text-center">
                                        <h6>Calories : {cookbook.calories}</h6>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="row text-center py-3">
                                        <i id="brain" className="fas fa-brain fa-2x"></i>
                                    </div>
                                    <div className="row text-center">
                                        <h6>Skill Level : {cookbook.skill_level}</h6>
                                    </div>

                                </div>

                            </div>

                            <div className="row py-3">
                                <hr id="line" />
                            </div>
                            <div className="container">
                               <div className="row py-3 text-center">
                                <h4>Directions</h4>
                                <div className="py-2">
                                
                                    <div>{directions.map((item) =>

                                        <p className="py-2">{item}</p>

                                    )}
                                    </div>
                                </div>
                            </div> 


                            <div className="row py-3 text-center">
                                <h4>Images</h4>
                            </div>



                            <div className="row py-3">
                                <img width='40%' data-toggle="modal" data-target="#exampleModal" src={`../../../images/assets/${cookbook.images}`}></img>




                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-lg modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">{cookbook.name}</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <img width='100%' data-toggle="modal" data-target="#exampleModal" src={`../../../images/assets/${cookbook.images}`}></img>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary disabled">Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            </div>

                            
                            
                            
                        </div>
                        <div className="col-lg-4 bg-light">
                            <div className="row justify-content-center py-4">
                                <h2>Ingredients</h2>
                            </div>
                            <div className="row text-center">

                                <div>{ingredients.map((item) =>

                                    <div className="py-2">{item}</div>

                                )}
                                </div>


                            </div>
                            <div className="row justify-content-center py-4">
                                <p>Submitted By: Kountry Cookin</p>
                            </div>

                        </div>
                    </div>

                    <div className="row py-3 d-flex flex-wrap text-center">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <hr id='commentline' />
                            <h5>Leave A Comment</h5>
                            <hr id='commentline' />
                        </div>

                    </div>

                    <div className="row py-3">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">


                            <div className="container">
                              <div className="row py-2">
                                <div className="input-group p-4 bg-light">
                                <div className="input-group">
                                    <button onClick={(e) => leaveComment()} className="btn btn-primary">Submit</button>
                                    <textarea onChange={(e) => setComment(e.target.value)}
                                    value={comment}
                                    className="form-control" aria-label="With textarea"></textarea>
                                </div>
                                
                            </div>
                            </div>

                              {comments.length >= 1 ? <div className="row mt-4 text-center">
                                <h5>Reviews</h5>
                            </div>: null}





<div className="row p-4">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row py-3">
                                        <div>{comments.map((item) =>

                                            <div className="container">
                                                <div className="row">
                                                    <p className="py-2">{item.comment}</p>
                                                </div>
                                                <div className="row justify-content-between">



                                                    <span><div><p className="text-success">{item._created}</p></div></span>

                                                    <span><div><p>Submitted By: {item.user}</p></div></span>
                                                </div>
                                                <div className="row py-3">
                                <hr id="commentline" />
                            </div>

                                            </div>





                                        )}


                                        </div>
                                    </div>


                                    

                                {comments.length >= 1 ? <div className="row justify-content-center py-3">
                                        <button className="btn btn-primary" disabled={currentPage <= 0} onClick={prevPage}>Previous</button>
                                        <button className="btn btn-secondary" disabled={comments.length <= 1} onClick={nextPage}>Next</button>
                                    </div> : <div className="row text-center py-2"><h6>Be The First To Comment !</h6></div>}

                                    
                                </div>


                            </div>



                            </div>
                            
                            


                            


                            
                        </div>

                    </div>



                </div>


            </main>
            <Footer />
        </>
    )
}
