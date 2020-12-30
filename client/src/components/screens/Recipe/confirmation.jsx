import React, { useEffect, useState } from 'react'
import Header from '../../header'
import '../../../utils/scss/pages/cookbook/_confirmation'
import { async } from 'regenerator-runtime';

export default function Confirmation(props) {

    const [cookbookId, setCookbookId] = useState('');

    useEffect(() => {
        handleCookbook();
        handleUpload();
        
        
      },[]);
    
    
    const back = (e) => {
        e.preventDefault();
        props.prevStep();
    };

    const handleUpload = async (e) => {
        let formdata = new FormData();
        formdata.append("image", props.values.images , props.values.images.name);

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

    const handleCookbook = async(e) => {

        let cookbookObject = {
            name: props.values.name,
            images: props.values.images.name,
            tags: JSON.stringify(props.values.tagsList),
            serving_size: props.values.servingSize,
            calories: props.values.calories,
            skill_level: props.values.skillLevel,
            featured: props.values.featured,
            approved: props.values.approved
    
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

    


    const handleDirections = async(cookbookId) => {
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

    const handleIngredients = async(cookbookId) => {
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


    const handleSubmit = () => {
        handleIngredients(cookbookId);
        handleDirections(cookbookId);
        
        
    }
    


    return (
        <>
            <Header />
            <main className="confirmation">

                <div id="confirmationContainer" className="container my-5 py-5">

                    <div className="row justify-content-center my-5">
                        <div>
                            <h2>Confirmation</h2>
                            <hr />
                        </div>
                    </div>

                    <div className="row justify-content-center">



                        <div className="col-lg-6 col-md-12 .hj y-4">



                            <div className="row justify-content-center py-4">
                                <h2>{props.values.name}</h2>
                            </div>
                            <div className="row justify-content-center align-items-center py-4">
                                <img width="400px" src={props.values.images ? URL.createObjectURL(props.values.images) : null}>
                                </img>

                            </div>



                        </div>

                        <div className="col-lg-4 col-md-12 py-4">


                            <div className="row justify-content-center py-4">

                                <div className="py-2"> <h2>Tags</h2>
                                    <hr />
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



                        <div className="col-lg-6 col-md-12 py-4">

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

                        <div className="col-lg-4 col-md-12 py-4">


                            <div className="row justify-content-center py-4">

                                <div> <h2>Ingredients</h2>
                                    {props.values.ingredientList.map(ingredientitem => <h6><div class="py-2">{ingredientitem}</div></h6>)}
                                </div>
                            </div>



                        </div>








                    </div>

                    <div className="row justify-content-center">
                        <button className="btn btn-danger" onClick={back}>Back</button>


                        <button className="btn btn-danger" onClick={handleSubmit}>Submit</button>
                    </div>



                </div>





            </main>


        </>
    )
}
