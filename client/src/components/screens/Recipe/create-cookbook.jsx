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




    function handleUpload(event) {
        setFile(event.target.files[0]);

        // Add code here to upload file to server
        // ...
    }











    return (
        <>
            <Header />
            <main className="cookbook">
                <div className="container bg-light py-4">
                    <div className="row py-4 justify-content-center">
                        <h2 className="text-dark outline">Create A Recipe</h2>
                    </div>
                </div>



                <div className="container bg-light">
                    <div className="row justify-content-center">
                        <form onSubmit={handleSubmit}>

                            <div className="row justify-content-center">
                                <div id="name">

                                    <input id="name" type="text"
                                        placeholder={'Recipe Name'}
                                        onChange={(e) => props.handleNameChange(e.target.value)}
                                        values={props.values.name}
                                        className="input-group-lg"
                                    />
                                </div>
                            </div>



                            <div className="row justify-content-center">
                                <div>

                                    <input id="servingSize" type="text"
                                        placeholder={'Serving Size'}
                                        onChange={(e) => props.handleServingSizeChange(e.target.value)}
                                        values={props.values.servingSize} />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div>

                                    <input id="calories" type="text"
                                        placeholder={'Calories'}
                                        onChange={(e) => props.handleCaloriesChange(e.target.value)}
                                        values={props.values.calories} />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div>

                                    <input id="skillLevel" type="text"
                                        placeholder={'Skill Level'}
                                        onChange={(e) => props.handleSkillChange(e.target.value)}
                                        values={props.values.skillLevel} />
                                </div>

                            </div>

                            <div className="row justify-content-center">
                                <div>
                                    <div id="upload-box">
                                        <input type="file" onChange={(e) => props.handleImageChange(e.target.files[0])} />

                                    </div>
                                </div>
                            </div>

                        </form>
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



                            <span className="continue text-success py-5"
                                onClick={next}
                                disabled={props.values.name.length < 1 || props.values.tags.length < 1 || props.values.servingSize.length < 1}><i class="fas fa-arrow-circle-right fa-3x"></i></span>



                        </div>

                    </div>
                </div>





            </main>
        </>
    )
}
