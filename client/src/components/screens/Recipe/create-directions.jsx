import React, { useState } from 'react'
import '../../../utils/scss/pages/cookbook/_createDirections'
import Header from '../../header';

export default function CreateDirections(props) {




    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    };

    const back = (e) => {
        e.preventDefault();
        props.prevStep();
    };

    const handleDirection = e => {
        props.handleAddDirections(e.target.value);
    }




    return (
        <>
            <Header color='header' />
            <main className="directions">


                <div id="directionsContainer" className="container my-4">





                    <div className="row justify-content-center">
                        <h2 className="mb-5 outline">Add Directions</h2>
                    </div>

                    <div className="row justify-content-center d-flex flex-wrap my-2 py-5">

                        <div className="stepBorder">
                            <h6 className="pt-2">{props.values.step}</h6>
                        </div>

                        <div className="m-2">
                            <span>Add Directions</span>
                            <hr />
                        </div>

                        <div className="stepBorder remove">
                            <h6 className="pt-2">{props.values.step + 1}</h6>
                        </div>
                        <div className="m-2 remove">
                            <span>Add Tags</span>
                            <hr />
                        </div>
                        <div className="stepBorder remove">
                            <h6 className="pt-2">{props.values.step + 2}</h6>
                        </div>
                        <div className="m-2 remove">
                            <span>Confirmation</span>
                            <hr />
                        </div>
                        <div className="stepBorder remove">
                            <h6 className="pt-2">{props.values.step + 3}</h6>
                        </div>
                        <div className="m-2 remove">
                            <span>Complete</span>
                            <hr />
                        </div>




                    </div>


                    <div className="row justify-content-center">
                        <div className="form-group">

                            <textarea type="text" className="" name="github" onChange={handleDirection}
                                value={props.values.direction}
                                placeholder="Add Directions" />

                        </div>
                    </div>


                    <div className="container mb-5">
                        <div className="row justify-content-center">
                            <span
                            >

                                <button className="btn continue py-5 mx-3"
                                    onClick={back}><i className="fas fa-arrow-circle-left fa-2x"></i></button>


                            </span>
                            <span
                            >
                                <button className="btn continue py-5 mx-3"
                                    disabled={props.values.direction.length < 1}
                                    onClick={(e) => props.handleDirectionsPush()}><i className="fas fa-plus-circle fa-2x"></i></button>


                            </span>
                            <span
                            >
                                <button className="btn continue py-5 mx-3"
                                    disabled={props.values.directionsList.length < 1}
                                    onClick={(e) => props.handleDirectionsRemove()}><i className="fas fa-minus-circle fa-2x"></i></button>


                            </span>
                            <span >

                                <button className="btn continue py-5 mx-3"
                                    onClick={next}
                                    disabled={props.values.directionsList.length < 1}><i className="fas fa-arrow-circle-right fa-2x"></i></button>


                            </span>
                        </div>
                    </div>







                    {props.values.directionsList.length >= 1 ? <div className="container py-5">
                        <div className="row justify-content-center">
                            <h4>Directions List</h4>
                        </div>
                        <div className="row justify-content-center">
                            <ol>
                                {props.values.directionsList.map((directionitem) => {
                                    return <li className="py-3" key={directionitem}>{directionitem}</li>
                                })}
                            </ol>
                        </div>


                    </div>
                        : <div className="container py-5">
                            <div className="row justify-content-center">
                                <h4>Directions List:</h4>

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
