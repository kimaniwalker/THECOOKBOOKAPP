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
        <Header />
        <main className="directions">

       
         <div className="container">
             <div className="row justify-content-center">
                 <h2 className="mb-5 text-light outline">Directions</h2>
             </div>
                
                <div className="row justify-content-center">
                  <div className="form-group">
                    
                    <input type="text" className="" name="github" onChange={handleDirection}
                    value={props.values.direction}
                    placeholder="Add Directions" />

                </div>  
                </div>
                
                
                
                <div className="container mb-5">
                    <div className="row justify-content-center">
                        <span className="continue text-light py-5 mx-3"
                            onClick={back}
                        ><i className="fas fa-arrow-circle-left fa-3x"></i>
                        </span>
                        <span className="continue text-light py-5 mx-3"
                            disabled={props.values.directionsList.length < 1}
                            onClick={(e) => props.handleDirectionsPush()}
                        ><i class="fas fa-plus-circle fa-3x"></i>
                        </span>
                        <span className="continue text-light py-5 mx-3"
                            onClick={next}
                            disabled={props.values.directionsList.length < 1}><i className="fas fa-arrow-circle-right fa-3x"></i>
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
