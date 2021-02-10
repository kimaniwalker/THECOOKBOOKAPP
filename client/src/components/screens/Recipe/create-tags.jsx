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



                    <div className="row justify-content-center text-center">
                        <h2 className="py-4">Add Tags</h2>
                    </div>


                    <div className="row justify-content-center pt-5">
                        <div className="col-8">
                            <div className="form-group">

                                <input type="text" className="input-group py-2" name="tags" onChange={handleTags}
                                    value={props.values.tags}
                                    placeholder="Add Tags" />
                            </div>
                        </div>

                    </div>



                    <div className="row justify-content-center text-center">
                        <span
                        >
                            <button className="btn continue py-5 mx-3"
                                onClick={back}><i className="fas fa-arrow-circle-left fa-2x"></i></button>

                            <button className="btn continue py-5 mx-3"
                                disabled={props.values.tags.length < 1}
                                onClick={(e) => props.handleTagsPush()}><i class="fas fa-plus-circle fa-2x"></i></button>
                            <button className="btn continue py-5 mx-3"
                                onClick={next}
                                disabled={props.values.tagsList.length < 1}><i className="fas fa-arrow-circle-right fa-2x"></i></button>

                        </span>


                    </div>


                    {props.values.tagsList.length >= 1 ?
                        <div className="row justify-content-center text-center">
                            <h4>Tags List</h4>


                            <ol>
                                {props.values.tagsList.map((tagsitem) => {
                                    return <li className="py-2" key={tagsitem}>{tagsitem}</li>
                                })}
                            </ol>
                        </div>



                        :
                        <div className="row justify-content-center text-center">
                            <h4>Tags List:</h4>


                            
                                <div className="text-danger"><span>Your List Is Currently Empty</span></div>
                            
                        </div>}
                </div>







            </main>

        </>
    )
}
