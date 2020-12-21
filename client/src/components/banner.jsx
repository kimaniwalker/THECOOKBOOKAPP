import React from 'react'
import '../utils/scss/pages/_banner'

export default function Banner(props) {
    

    return (
        <>
        <main className="banner d-flex align-items-center">
            <div className="container banner-bg d-flex justify-content-center align-items-center">
                <div className="row justify-content-center py-2">
                    <span><div className=""><h3>{props.message}</h3></div></span>
                </div>
                
            </div>
        </main>
            
        </>
    )
}
