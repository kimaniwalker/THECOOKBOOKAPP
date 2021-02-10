import React, { useEffect, useState } from 'react'
import Header from '../../header'
import '../../../utils/scss/pages/cookbook/_recipeScreen'
import { async } from 'regenerator-runtime';

export default function Confirmation(props) {

    const [cookbookId, setCookbookId] = useState('');

    useEffect(() => {
        handleCloudinaryUpload();
        handleCookbook();
        handleUpload();
        


    }, []);


    const back = (e) => {
        e.preventDefault();
        let requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch(`api/cookbook/${cookbookId}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        props.prevStep();
    };

    const handleUpload = async (e) => {
        let formdata = new FormData();
        formdata.append("image", props.values.images, props.values.images.name);

        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch('api/cookbook/image', requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    const handleCloudinaryUpload = async(e) => {
        let formdata = new FormData();
        formdata.append("file", props.values.images, props.values.images.name);
        formdata.append("upload_preset", "cookbook");

        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://api.cloudinary.com/v1_1/LOKIDDO/auto/upload", requestOptions)
            .then(response => response.json())
            .then(result => props.handleCookbookImage(result.url))
            .catch(error => console.log('error', error));
    }

    const handleCookbook = async (e) => {

        let cookbookObject = {
            name: props.values.name,
            images: props.values.images.name,
            tags: JSON.stringify(props.values.tagsList),
            serving_size: props.values.servingSize,
            calories: props.values.calories,
            skill_level: props.values.skillLevel,
            featured: props.values.featured,
            approved: props.values.approved,
            description: props.values.description

        }

        console.log(cookbookObject)

        try {

            let res = await fetch('/api/cookbook', {
                method: 'POST',
                body: JSON.stringify(cookbookObject),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let id = await res.json();
            console.log(id)
            setCookbookId(id.id);
            console.log(cookbookId)
            
        } catch (e) {
            console.log(e);
        }




    }

    const handleDirections = async (cookbookId) => {
        let directionsObject = {
            cookbookId: cookbookId,
            description: JSON.stringify(props.values.directionsList)
        }

        console.log(directionsObject)

        try {

            let res = await fetch('/api/cookbook-directions', {
                method: 'POST',
                body: JSON.stringify(directionsObject),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let id = await res.json();

            console.log(id)
            
        } catch (e) {

        }

    }

    const handleIngredients = async (cookbookId) => {
        let ingredientsObject = {
            cookbookId: cookbookId,
            ingredient: JSON.stringify(props.values.ingredientList)
        }

        console.log(ingredientsObject)

        try {

            let res = await fetch('/api/cookbook-ingredients', {
                method: 'POST',
                body: JSON.stringify(ingredientsObject),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let id = await res.json();
            console.log(id)
            

        } catch (e) {

        }

    }

    const updateImage = async (cookbookId) => {
        let cookbookObject = {
            id: cookbookId,
            name: props.values.name,
            images: props.values.cookbookImage,
            tags: JSON.stringify(props.values.tagsList),
            serving_size: props.values.servingSize,
            calories: props.values.calories,
            skill_level: props.values.skillLevel,
            featured: props.values.featured,
            approved: props.values.approved,
            description: props.values.description,
            user: props.values.user

        }

        console.log(cookbookObject)

        try {

            let res = await fetch('/api/cookbook', {
                method: 'PUT',
                body: JSON.stringify(cookbookObject),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let update = await res.json();
            console.log(update)
        
            
        } catch (e) {
            console.log(e);
        }

    }


    const handleSubmit = async () => {
       
        try {
            handleIngredients(cookbookId);
            handleDirections(cookbookId);
            updateImage(cookbookId);
            /* setTimeout(redirect, 2000); */

        } catch (e) {
            console.log(e)
        }
        

        

    }

    const redirect = () => {

        window.location.href = "/";
    }



    return (
        <>
            <Header color='header-dark' />
            <main className="recipeScreen">

                <div id="recipeContainer" className="container">
                    <div className="row d-flex flex-wrap">
                        <div className="col-lg-8">
                            <div className="row py-3 justify-content-center bg-danger">
                                <h2>{props.values.name}</h2>
                            </div>
                            <div className="row py-3 bg-light text-center">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="row justify-content-center py-3">
                                        <i id="utinsils" className="fas fa-utensils fa-2x"></i>
                                    </div>
                                    <div className="row justify-content-center">
                                        <h6>{props.values.servingSize} Servings</h6>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="row justify-content-center py-3">
                                        <i id="apple" class="fab fa-nutritionix fa-2x"></i>
                                    </div>
                                    <div className="row justify-content-center">
                                        <h6>{props.values.calories} Calories</h6>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="row justify-content-center py-3">
                                        <i id="brain" className="fas fa-brain fa-2x"></i>
                                    </div>
                                    <div className="row justify-content-center">
                                        <h6>Skill Level : {props.values.skillLevel}</h6>
                                    </div>

                                </div>

                            </div>

                            <div className="row py-3">
                                <hr id="line" />
                            </div>
                            <div className="container">
                                <div className="row py-3 text-center">
                                    <h4>Directions</h4>
                                    <div className="py-2">
                                        <div>{props.values.directionsList.map((item) =>

                                            <p className="py-2">{item}</p>

                                        )}
                                        </div>
                                    </div>
                                </div>


                                <div className="row py-3 text-center">
                                    <h4>Images</h4>
                                </div>



                                <div className="row py-3">
                                    <img width='40%' data-toggle="modal" data-target="#exampleModal" src={props.values.images ? URL.createObjectURL(props.values.images) : null}></img>




                                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog  modal-lg modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">{props.values.name}</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <img width='100%' data-toggle="modal" data-target="#exampleModal" src={props.values.images ? URL.createObjectURL(props.values.images) : null}></img>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary disabled">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>




                        </div>
                        <div className="col-lg-4 bg-light">
                            <div className="row justify-content-center py-4">
                                <h2>Ingredients</h2>
                            </div>
                            <div className="row justify-content-center py-4 text-center">

                                <div>{props.values.ingredientList.map((item) =>

                                    <div className="py-2">{item}</div>

                                )}
                                </div>


                            </div>
                            <div className="row justify-content-center text-center">
                                <p>Submitted By: Kountry Cookin</p>
                            </div>

                        </div>
                    </div>
                    <div className="row justify-content-center py-2">
                        <button className="btn btn-danger" onClick={back}>Back</button>


                        <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                    </div>



                </div>


            </main>
        </>
    )
}
