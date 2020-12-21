import React, { useState, Fragment } from 'react';
import '../../src/utils/scss/pages/_ourMenu.scss'




const OurMenu = (props) => {

        return (
            <>
            <main className="ourMenu">

           
            <div className="container menu my-5">
                <div className="row justify-content-center py-3">
                    <span><i className="fas fa-utensils fa-2x"></i></span>
                </div>
                <div className="row justify-content-center">
                <h2>Our Menu</h2>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="row justify-content-center py-3">
                                    <h6>Apple Pie ... 10$</h6>
                                </div>
                                <div className="row justify-content-center py-3">
                                    <h6>Lobster Pie ... 15$</h6>
                                </div>
                                <div className="row justify-content-center py-3">
                                    <h6>Seacrusted Lemon ... 30$</h6>
                                </div>
                                <div className="row justify-content-center py-3">
                                    <h6>Strawberry Shortcake ... 10$</h6>
                                </div>
                                <div className="row justify-content-center py-3">
                                    <h6>Apple Pie ... 10$</h6>
                                </div>
                                <div className="row justify-content-center py-3">
                                    <h6>Lobster Pie ... 15$</h6>
                                </div>
                                <div className="row justify-content-center py-3">
                                    <h6>Seacrusted Lemon ... 30$</h6>
                                </div>
                                <div className="row justify-content-center py-3">
                                    <h6>Strawberry Shortcake ... 10$</h6>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </main>
            </>
        )
}

export default OurMenu;
