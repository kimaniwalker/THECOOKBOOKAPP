import React, { useState } from 'react'
import '../../../utils/scss/pages/cookbook/_createCookbook';
import Header from '../../header'


export default function CreateCookbook(props) {

    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    };


    return (
        <>
            <Header />
            <main className="cookbook">
                <div id="cookbookcontainer" className="container mb-5">
                    <div className="row py-4 justify-content-center py-4">
                        <h2 className="text-dark outline">Create A Recipe</h2>
                    </div>

                    <div className="row justify-content-center d-flex flex-wrap my-2 py-5">

                        <div className="stepBorder">
                            <h6 className="pt-2">{props.values.step}</h6>
                        </div>

                        <div className="m-2">
                            <span>Create Cookbook</span>
                            <hr />
                        </div>

                        <div className="stepBorder remove">
                            <h6 className="pt-2">{props.values.step + 1}</h6>
                        </div>
                        <div className="m-2 remove">
                            <span>Add Ingredients</span>
                            <hr />
                        </div>
                        <div className="stepBorder remove">
                            <h6 className="pt-2">{props.values.step + 2}</h6>
                        </div>
                        <div className="m-2 remove">
                            <span>Add Directions</span>
                            <hr />
                        </div>
                        <div className="stepBorder remove">
                            <h6 className="pt-2">{props.values.step + 3}</h6>
                        </div>
                        <div className="m-2 remove">
                            <span>Add Tags</span>
                            <hr />
                        </div>




                    </div>




                    <div className="container">
                        <div className="row justify-content-center">
                            <form>

                                <div className="row justify-content-center">
                                    <div id="name">

                                        <input id="name" type="text"
                                            placeholder={'Recipe Name'}
                                            onChange={(e) => props.handleNameChange(e.target.value)}
                                            value={props.values.name}
                                            className="input-group-lg"
                                        />
                                    </div>
                                </div>



                                <div className="row justify-content-center">
                                    <div>

                                        <input id="servingSize" type="text"
                                            placeholder={'Serving Size'}
                                            onChange={(e) => props.handleServingSizeChange(e.target.value)}
                                            value={props.values.servingSize} />
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div>

                                        <input id="calories" type="text"
                                            placeholder={'Calories'}
                                            onChange={(e) => props.handleCaloriesChange(e.target.value)}
                                            value={props.values.calories} />
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div>

                                        <input id="skillLevel" type="text"
                                            placeholder={'Skill Level'}
                                            onChange={(e) => props.handleSkillChange(e.target.value)}
                                            value={props.values.skillLevel} />
                                    </div>

                                </div>


                                <div className="row justify-content-center">
                                    <div>
                                        <div id="upload-box">
                                            <input type="file" onChange={(e) => props.handleImageChange(e.target.files[0])
                                            } />

                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>


                        <div className="container">
                            <div className="row justify-content-center py-4">
                                {props.values.name.length < 1 || props.values.tags.length < 1 || props.values.servingSize.length < 1 ?

                                    <div className="container">
                                        <div className="row justify-content-center">

                                            <span className="warning py-4 text-danger">* Please Fill Out All Form Items To Proceed</span>

                                        </div>

                                    </div>
                                    : null
                                }
                            </div>
                        </div>



                        <div className="container py-4">
                            <div className="row justify-content-center">


                                <div>
                                    <span className="continue text-success py-5">



                                        <button className="btn" onClick={next}
                                            disabled={props.values.skillLevel.length < 1
                                                || props.values.calories.length < 1 || props.values.name.length < 1 ||
                                                props.values.servingSize.length < 1 || props.values.images.length < 1}


                                        ><i className="fas fa-arrow-circle-right fa-2x"></i>
                                        </button>

                                    </span>
                                </div>







                            </div>

                        </div>
                    </div>

                </div>





            </main>
        </>
    )
}
