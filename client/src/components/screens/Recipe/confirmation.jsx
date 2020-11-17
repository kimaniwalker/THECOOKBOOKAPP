import React from 'react'

export default function Confirmation(props) {

    const back = (e) => {
        e.preventDefault();
        props.prevStep();
    };

    return (
        <>
            <h2>Confirmation</h2>
            
            <div className="col-3">
                <button className="btn btn-danger" onClick={back}>Back</button>
            </div>
        </>
    )
}
