import React, { useState } from 'react'
import '../../../utils/scss/pages/cookbook/_createCookbook';
import Header from '../../header'


export default function CreateCookbook(props) {



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked')
        setCompleted(true);

    }


    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    };

    const handleName = e => {
        props.handleNameChange(e.target.value);
    }

    const handleTags = e => {
        props.handleTagsChange(e.target.value);
    }

    const handleServingSize = e => {
        props.handleServingSizeChange(e.target.value);
    }






    return ( 
        <>
        <Header />
            <main className="cookbook">
                <div className="container">
                    <div className="row py-4 justify-content-center">
                        <h2 className="text-light outline">Submit A Recipe</h2>
                    </div>
                </div>

                <div className="container py-4">
                    <div className="row justify-content-center d-flex flex-wrap">

                        <div className="stepBorder">
                            <h6 className="pt-2">{props.values.step}</h6>
                        </div>

                        <div className="m-2">
                            <span>Create Cookbook</span>
                            <hr />
                        </div>

                        <div className="stepBorder">
                            <h6 className="pt-2">{props.values.step + 1}</h6>
                        </div>
                        <div className="m-2">
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
                            <span>Submit</span>
                            <hr />
                        </div>




                    </div>

                    <div className="row justify-content-center">

                    </div>


                </div>


                <div className="container">
                    <div className="row justify-content-center">
                        <form onSubmit={handleSubmit}>

                            <div className="">
                            
                                <input id="name" type="text"
                                    placeholder={'Recipe Name'}
                                    onChange={handleName}
                                    values={props.values.name}
                                    className="input-group-lg"
                                />
                            </div>

                            <div>


                                <input id="tags" type="text"
                                    placeholder={'Tags'}
                                    onChange={handleTags}
                                    values={props.values.tags} />

                            </div>

                            <div>

                                <input id="servingSize" type="text"
                                    placeholder={'Serving Size'}
                                    onChange={handleServingSize}
                                    values={props.values.servingSize} />
                            </div>



                        </form>
                    </div>



                </div>

                {props.values.name.length < 1 || props.values.tags.length < 1 || props.values.servingSize.length < 1 ?

                    <div className="container">
                        <div className="row justify-content-center">

                            <span className="warning py-4 text-danger">* Please Fill Out All Form Items To Proceed</span>

                        </div>

                    </div>
                    : null
                }
                <div className="container">
                    <div className="row justify-content-center">



                        <span className="continue text-light py-5"
                            onClick={next}
                            disabled={props.values.name.length < 1 || props.values.tags.length < 1 || props.values.servingSize.length < 1}><i class="fas fa-arrow-circle-right fa-3x"></i></span>



                    </div>

                </div>





            </main>
        </>
    )
}
