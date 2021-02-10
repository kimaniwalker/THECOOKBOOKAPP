import React, { useState } from 'react'
import '../../../utils/scss/pages/cookbook/_createCookbook';


export default function CreateCookbook(props) {

    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    };


    return (
        <>

            <main className="cookbook">
                <div id="cookbookcontainer" className="container mb-5">
                    <div className="row py-4 justify-content-center py-4">
                        <h2 className="text-dark">Create A Recipe</h2>
                    </div>
                    <div className="row">
                        <form class="row g-3">
                            <div class="col-12">
                                <label for="recipeName" class="form-label">Recipe Name</label>
                                <input type="text" class="form-control" id="recipeName"
                                    onChange={(e) => props.handleNameChange(e.target.value)}
                                    value={props.values.name} />
                            </div>
                            <div class="col-12">
                                <label for="inputDifficulty" class="form-label">Level Of Difficulty</label>
                                <select onChange={(e) => props.handleSkillChange(e.target.value)}
                                    value={props.values.skillLevel} id="inputDifficulty" class="form-select">
                                    <option selected>Easy</option>
                                    <option>Intermediate</option>
                                    <option>Very Difficult</option>
                                </select>
                            </div>

                            <div class="col-md-6">
                                <label for="servingSize" class="form-label">Serving Size</label>
                                <input onChange={(e) => props.handleServingSizeChange(e.target.value)}
                                    value={props.values.servingSize}
                                    type="number" class="form-control" id="servingSize" />
                            </div>
                            <div class="col-md-6">
                                <label for="calories" class="form-label">Calories</label>
                                <input onChange={(e) => props.handleCaloriesChange(e.target.value)}
                                    value={props.values.calories} type="number" class="form-control" id="calories" />
                            </div>
                            <div class="col-12">
                                <label for="description" class="form-label">Description</label>
                                <textarea onChange={(e) => props.handleAddDescription(e.target.value)}
                                    value={props.values.description} type="text" class="form-control" id="description" placeholder="Give your recipe a short description" />
                            </div>
                            <div class="col-12">
                                <div class="input-group py-2">
                                    <input type="file" onChange={(e) => props.handleImageChange(e.target.files[0])}
                                        class="form-control" id="recipeImage" aria-describedby="recipeImage" aria-label="Upload" />
                                    <button class="btn btn-outline-secondary" type="button" id="recipeImage">Upload Image</button>
                                </div>
                            </div>


                        </form>

                    </div>
                    <div className="row py-4">

                        {props.values.name.length < 1 || props.values.tags.length < 1 || props.values.servingSize.length < 1 ?




                            <span className="warning text-danger text-center py-2"> * Please Fill Out All Form Items To Proceed</span>




                            : null
                        }
                        <button type="submit" onClick={next} disabled={props.values.skillLevel.length < 1
                            || props.values.calories.length < 1 || props.values.name.length < 1 ||
                            props.values.servingSize.length < 1 || props.values.images.length < 1 || props.values.description.length < 1} class="btn continue"><i className="fas fa-arrow-circle-right fa-2x"/></button>

                    </div>



                </div>







            </main>
        </>
    )
}
