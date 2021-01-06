import React, { useEffect, useState } from 'react'
import '../../../utils/scss/pages/cookbook/_createTags';
import Header from '../../header';

export default function CreateTags(props) {


    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    };

    const back = (e) => {
        e.preventDefault();
        props.prevStep();
    };

    const handleTags = e => {
        props.handleAddTags(e.target.value);
    }


    return (
        <>
            <Header color='header' />
            <main className="tags">


                <div id="tagsContainer" className="container my-4">



                    <div className="row justify-content-center">
                        <h2 className="mb-5 outline">Add Tags</h2>
                    </div>





                    <div className="row justify-content-center d-flex flex-wrap">

                        <div className="stepBorder ">
                            <h6 className="pt-2">{props.values.step - 1}</h6>
                        </div>

                        <div className="m-2">
                            <span>Create Tags</span>
                            <hr />
                        </div>

                        <div className="stepBorder remove">
                            <h6 className="pt-2">{props.values.step + 0}</h6>
                        </div>
                        <div className="m-2 remove">
                            <span>Confirmation</span>
                            <hr />
                        </div>
                        <div className="stepBorder remove">
                            <h6 className="pt-2">{props.values.step + 1}</h6>
                        </div>
                        <div className="m-2 remove">
                            <span>Complete</span>
                            <hr />
                        </div>










                    </div>

                    <div className="row justify-content-center pt-5">
                        <div className="form-group">

                            <input type="text" className="input-group" name="tags" onChange={handleTags}
                                value={props.values.tags}
                                placeholder="Add Tags" />
                        </div>
                    </div>



                    <div className="row justify-content-center">
                        <span
                        >
                            <button className="btn continue py-5 mx-3"
                                onClick={back}><i className="fas fa-arrow-circle-left fa-2x"></i></button>


                        </span>
                        <span
                        >
                            <button className="btn continue py-5 mx-3"
                                disabled={props.values.tags.length < 1}
                                onClick={(e) => props.handleTagsPush()}><i class="fas fa-plus-circle fa-2x"></i></button>

                        </span>
                        <span
                        >
                            <button className="btn continue py-5 mx-3"
                                disabled={props.values.tagsList.length < 1}
                                onClick={(e) => props.handleTagsRemove()}><i class="fas fa-minus-circle fa-2x"></i></button>

                        </span>
                        <span >

                            <button className="btn continue py-5 mx-3"
                                onClick={next}
                                disabled={props.values.tagsList.length < 1}><i className="fas fa-arrow-circle-right fa-2x"></i></button>

                        </span>
                    </div>


                    {props.values.tagsList.length >= 1 ? <div className="container py-5">
                        <div className="row justify-content-center">
                            <h4>Tags List</h4>
                        </div>
                        <div className="row justify-content-center">
                            <ol>
                                {props.values.tagsList.map((tagsitem) => {
                                    return <li className="py-3" key={tagsitem}>{tagsitem}</li>
                                })}
                            </ol>
                        </div>


                    </div>
                        : <div className="container py-5">
                            <div className="row justify-content-center">
                                <h4>Tags List:</h4>

                            </div>
                            <div className="row justify-content-center">
                                <div className="text-danger"><span>Your List Is Currently Empty</span></div>
                            </div>
                        </div>}
                </div>







            </main>

        </>
    )
}
