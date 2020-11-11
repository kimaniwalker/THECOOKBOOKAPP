import React, { useState, Fragment } from 'react';
import '../utils/scss/pages/_checkoutForm.scss';
import { Redirect } from "react-router-dom";
import useReactRouter from 'use-react-router';
import { loadStripe } from '@stripe/stripe-js';


const CheckoutForm = (props) => {


    const [customerName, setcustomerName] = useState('');
    const [quantity,setQuantitiy] = useState(1);
    const [amount, setamount] = useState('');
    const [submitted, setsubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [paymentPosted, setPaymentPosted] = useState(false);
    const [sessionId,setSessionId] = useState('');
    const { history, location, match } = useReactRouter();
    const stripePromise = loadStripe('pk_live_85nouWDDrDahUYvpRTLQ58Fv0041Fia2Uj');

    const { from } =  { from: { pathname: "/" } };
    


    const handlecustomerName = (e) => {
        setcustomerName(e.target.value);
    }

    const handleamount = (e) => {
        setamount(e.target.value);
    }

    const handlesubmitted = (e) => {
        setsubmitted(false);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }


    const handleCheckout = async (e) => {
        
        e.preventDefault();

        try {
            let res = await fetch('/api/donate/create-checkout-session', {
                method: 'POST',
                body: JSON.stringify({ amount, description }),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let sessionResponse = await res.json();
            console.log(sessionResponse)
            setSessionId(sessionResponse);
            console.log('Redirecting To Stripe ! See ya later' + sessionId)
            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({
            sessionId: sessionResponse.id
    });

            
            
        } catch (e) {
            console.log(e)
        }
    }




    if (paymentPosted) {
        return <Redirect to={from} />
    } else
    return (
        <Fragment>
        
        <div className="checkoutForm">
            
            <div className="container-fluid">
            <NotificationContainer />
                <div className="row pt-3 pb-3 justify-content-center">
                    <div id="FormBg" className="col-lg-5 col-md-6 col-sm-7 pt-4">
                        <div className="row justify-content-center text-dark pb-2">
                            <h2>Make A Payment</h2>
                        </div>
                        
                        <div className="row justify-content-center mb-5">
                            <i className="fas fa-donate fa-2x text-dark"></i>

                        </div>
                        <form onSubmit={(e) => handleCheckout(e)}>

                            <div className="row mb-4 ml-3 mr-3">
                                <input className="input-group"
                                    value={customerName}
                                    onChange={handlecustomerName}
                                    placeholder="Full Name"
                                />
                            </div>

                            <div className="row mb-4 ml-3 mr-3">
                                <input className="input-group"
                                    value={email}
                                    onChange={handleEmail}
                                    placeholder="Email"
                                />
                            </div>

                            <div className="row mb-4 ml-3 mr-3">
                                <input className="input-group"
                                    value={phone}
                                    onChange={handlePhone}
                                    placeholder="Phone"
                                />
                            </div>

                            <div className="row mb-4 ml-3 mr-3">
                                <input 
                                className="input-group"
                                onChange={handleDescription}
                                value={description}
                                placeholder="Short Description">
                                </input>
                            </div>



                            <div className="row mb-4 ml-3 mr-3 pb-4">
                                <input className="input-group"
                                    value={amount}
                                    onChange={handleamount}
                                    placeholder="Amount Ex. 40.00" />
                            </div>

                            <div className="row justify-content-center mb-4 mr-3 ml-3 pt-4 pb-3">
                                <button type="submit" className="btn btn-info mt-2">Checkout With Stripe</button>
                            </div>



                        </form>



                    </div>
                    


                </div>

            </div>
            
            
        </div>
        
        </Fragment>

    );

}

export default CheckoutForm;

