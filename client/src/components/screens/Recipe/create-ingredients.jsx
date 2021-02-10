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



                    <div className="row justify-content-center">
                        <h2 className="">Add Ingredients</h2>
                    </div>




                    <div className="row justify-content-center pt-5">
                        <div className="col-8">
                            <div className="form-group">

                            <input type="text" className="input-group py-2" name="ingredient" onChange={(e) => props.handleAddIngredient(e.target.value)}
                                value={props.values.ingredient}
                                placeholder="Add Ingredient" />
                        </div>
                        </div>
                        
                    </div>








                    <div className="row justify-content-center text-center">
                        <span
                        >

                            <button className=" btn continue py-5 mx-3"
                                onClick={back}><i className="fas fa-arrow-circle-left fa-2x"></i></button>
                            <button className="btn continue py-5 mx-3"
                                disabled={props.values.ingredient.length < 1}
                                onClick={(e) => props.handleIngredientPush()}><i class="fas fa-plus-circle fa-2x"></i></button>

                            <button className="btn continue py-5 mx-3"
                                disabled={props.values.ingredientList.length < 1}
                                onClick={(e) => props.handleIngredientRemove()}><i class="fas fa-minus-circle fa-2x"></i></button>
                            <button className=" btn continue py-5 mx-3"
                                onClick={next}
                                disabled={props.values.ingredientList.length < 1}><i className="fas fa-arrow-circle-right fa-2x"></i></button>





                        </span>
                    </div>

                    <div className="row justify-content-center">



                        {props.values.ingredientList.length >= 1 ?
                            <div className="row justify-content-center text-center">
                                <h4>Ingredient List</h4>

                                <ol>
                                    {props.values.ingredientList.map((ingredientitem) => {
                                        return <li className="py-2" key={ingredientitem}>{ingredientitem}</li>
                                    })}
                                </ol>

                            </div>



                            :
                            <div className="row justify-content-center text-center">
                                <h4 className="">Ingredient List:</h4>



                                <div className="text-warning"><span>Your List Is Currently Empty</span></div>

                            </div>

                        }
                    </div>
                </div>











            </main>

        </>
    )
}
