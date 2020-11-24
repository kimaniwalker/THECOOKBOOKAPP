import React from 'react'
import Header from '../../header'
import '../../../utils/scss/pages/cookbook/_confirmation'

export default function Confirmation(props) {

    const back = (e) => {
        e.preventDefault();
        props.prevStep();
    };



    return (
        <>
        <Header />
            <main className="confirmation py-5">

                <div id="confirmationContainer" className="container my-5 py-5">

                    <div className="row justify-content-center my-5 py-4">
                        <div>
                            <h2>Confirmation</h2>
                        </div>
                    </div>

                    <div className="row justify-content-center">



                        <div className="col-lg-6 col-md-12 bg-primary py-4">



                            <div className="row justify-content-center py-4">
                                <h2>{props.values.name}</h2>
                            </div>
                            <div className="row justify-content-center align-items-center py-4">
                                <img width="400px" src={props.values.images ? URL.createObjectURL(props.values.images) : null}>
                                </img>

                            </div>



                        </div>

                        <div className="col-lg-4 col-md-12 bg-success py-4">


                            <div className="row justify-content-center py-4">

                                <div className="py-2"> <h2>Tags</h2>
                                    {props.values.tagsList.map(tagitem => <h4><div class="badge badge-secondary badge-pill">{tagitem}</div></h4>)}
                                </div>
                            </div>

                            <hr />

                            <div className="row justify-content-center py-2">
                                <h6>Serving Size : {props.values.servingSize}</h6>
                            </div>
                            <div className="row justify-content-center py-2">
                                <h6>Calories : {props.values.calories}</h6>
                            </div>
                            <div className="row justify-content-center py-2">
                                <h6>Skill Level : {props.values.skillLevel}</h6>
                            </div>




                        </div>








                    </div>



                    <div className="row justify-content-center">



                        <div className="col-lg-6 col-md-12 bg-warning py-4">

                            <div className="row justify-content-center py-4">

                                <div> <h2>Instructions</h2>
                                    <div>
                                        <ol className="">{props.values.directionsList.map(instructionitem =>



                                            <li className="py-2" key={instructionitem}><h6>{instructionitem}</h6></li>

                                        )}
                                        </ol>

                                    </div>




                                </div>
                            </div>


                        </div>

                        <div className="col-lg-4 col-md-12 bg-secondary py-4">


                            <div className="row justify-content-center py-4">

                                <div> <h2>Ingredients</h2>
                                    {props.values.ingredientList.map(ingredientitem => <h6><div class="py-2">{ingredientitem}</div></h6>)}
                                </div>
                            </div>



                        </div>








                    </div>

                    <div className="row justify-content-center">
                        <button className="btn btn-danger" onClick={back}>Back</button>


                    </div>


                </div>





            </main>


        </>
    )
}
