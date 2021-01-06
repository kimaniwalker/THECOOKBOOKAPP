import React, { useEffect, useState } from 'react'
import '../../../utils/scss/pages/cookbook/_createIngredient';
import Header from '../../header';

export default function CreateIngredients(props) {


    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    };

    const back = (e) => {
        e.preventDefault();
        props.prevStep();
    };

    const handleIngredient = e => {
        props.handleAddIngredient(e.target.value);
    }

    

    return (
        <>
            <Header color='header' />
            <main className="ingredients">

                <div id="ingredientsContainer" className="container py-5 my-4">


                    <div className="container">
                        <div className="row justify-content-center">
                            <h2 className="mb-5 outline">Add Ingredients</h2>
                        </div>


                    </div>

                    <div className="row justify-content-center d-flex flex-wrap py-5 my-2">

                            <div className="stepBorder">
                                <h6 className="pt-2">{props.values.step}</h6>
                            </div>

                            <div className="m-2">
                                <span>Add Ingredients</span>
                                <hr />
                            </div>

                            <div className="stepBorder remove">
                                <h6 className="pt-2">{props.values.step + 1}</h6>
                            </div>
                            <div className="m-2 remove">
                                <span>Add Directions</span>
                                <hr />
                            </div>
                            <div className="stepBorder remove">
                                <h6 className="pt-2">{props.values.step + 2}</h6>
                            </div>
                            <div className="m-2 remove">
                                <span>Add Tags</span>
                                <hr />
                            </div>
                            <div className="stepBorder remove">
                                <h6 className="pt-2">{props.values.step + 3}</h6>
                            </div>
                            <div className="m-2 remove">
                                <span>Submit</span>
                                <hr />
                            </div>




                        </div>

                    <div className="container py-4">
                        

                        <div className="row justify-content-center pt-5">
                            <div className="form-group">

                                <input type="text" className="input-group" name="ingredient" onChange={(e) => props.handleAddIngredient(e.target.value)}
                                    value={props.values.ingredient}
                                    placeholder="Add Ingredient" />
                            </div>
                        </div>


                    </div>




                    <div className="container mb-5">
                        <div className="row justify-content-center">
                            <span 
                            >
                                
                                <button className=" btn continue py-5 mx-3"
                                onClick={back}><i className="fas fa-arrow-circle-left fa-2x"></i></button>
                                
                                
                                
                            </span>
                            <span 
                            >
                                
                                <button className="btn continue py-5 mx-3"
                                disabled={props.values.ingredient.length < 1}
                                onClick={(e) => props.handleIngredientPush()}><i class="fas fa-plus-circle fa-2x"></i></button>
                                
                                
                            </span>
                            <span 
                            >
                                
                                <button className="btn continue py-5 mx-3"
                                disabled={props.values.ingredientList.length < 1}
                                onClick={(e) => props.handleIngredientRemove()}><i class="fas fa-minus-circle fa-2x"></i></button>
                                
                                
                            </span>
                            <span >
                                    <button className=" btn continue py-5 mx-3"
                                onClick={next}
                                disabled={props.values.ingredientList.length < 1}><i className="fas fa-arrow-circle-right fa-2x"></i></button>
                                    
                                    
                            </span>
                        </div>
                    </div>

                    {props.values.ingredientList.length >= 1 ? <div className="container py-5">
                        <div className="row justify-content-center">
                            <h4>Ingredient List</h4>
                        </div>
                        <div className="row justify-content-center">
                            <ol>
                                {props.values.ingredientList.map((ingredientitem) => {
                                    return <li className="py-3" key={ingredientitem}>{ingredientitem}</li>
                                })}
                            </ol>
                        </div>


                    </div>
                        : <div className="container py-5">
                            <div className="row justify-content-center">
                                <h4>Ingredient List:</h4>

                            </div>
                            <div className="row justify-content-center">
                                <div className="text-warning"><span>Your List Is Currently Empty</span></div>
                            </div>
                        </div>}
                </div>








            </main>

        </>
    )
}
