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
                        <h2 className="py-4">Add Directions</h2>
                    </div>




                    <div className="row justify-content-center text-center">
                        <div className="col-8">
                            <div className="form-group">

                                <input type="text" className="input-group py-2" name="github" onChange={handleDirection}
                                    value={props.values.direction}
                                    placeholder="Add Directions" />

                            </div>
                        </div>



                    </div>



                    <div className="row justify-content-center text-center">
                        <span
                        >

                            <button className="btn continue py-5 mx-3"
                                onClick={back}><i className="fas fa-arrow-circle-left fa-2x"></i></button>
                            <button className="btn continue py-5 mx-3"
                                disabled={props.values.direction.length < 1}
                                onClick={(e) => props.handleDirectionsPush()}><i className="fas fa-plus-circle fa-2x"></i></button>
                            <button className="btn continue py-5 mx-3"
                                disabled={props.values.directionsList.length < 1}
                                onClick={(e) => props.handleDirectionsRemove()}><i className="fas fa-minus-circle fa-2x"></i></button>
                            <button className="btn continue py-5 mx-3"
                                onClick={next}
                                disabled={props.values.directionsList.length < 1}><i className="fas fa-arrow-circle-right fa-2x"></i></button>


                        </span>



                    </div>








                    {props.values.directionsList.length >= 1 ?
                        <div className="row justify-content-center text-center py-2">
                            <h4>Directions List</h4>


                            <ol>
                                {props.values.directionsList.map((directionitem) => {
                                    return <li className="py-3" key={directionitem}>{directionitem}</li>
                                })}
                            </ol>

                        </div>



                        :
                        <div className="row justify-content-center text-center py-2">
                            <h4>Directions List:</h4>

                            <div className="text-warning"><span>Your List Is Currently Empty</span></div>

                        </div>

                    }





                </div>

            </main>
        </>
    )
}
