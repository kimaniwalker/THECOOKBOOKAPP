import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import Header from './header';
import Footer from './footer';
import '../utils/scss/pages/cookbook/_subscription.scss';

export default function Subscription(props) {

    const [amount, setAmount] = useState(10);
    const [description, setDescription] = useState('Pro Membership Sign-up');
    const [name, setName] = useState('Kountry Cookin Pro Membership');
    const [mode, setMode] = useState('subscription');
    const [recurring, setRecurring] = useState('month');
    const [sessionId, setSessionId] = useState('');
    const [pro, setPro] = useState(true);
    const [allAccess, setAllAccess] = useState(false);
    const [customer_id, setCustomerId] = useState(props.customer_id)
    const [email, setEmail] = useState(props.email)
    const [priceid , setPriceId] = useState('price_1IE7JhFfRTtewmlrLM1PCrvn');

    const stripePromise = loadStripe('pk_live_51I6rObFfRTtewmlrAIwGACwJW0gkvVSYF1hvaE4cld9RZgvbxiNeyEbalFHLCLi6WVgmmLSVxBgqaGbW23RjOqIT00NVsKImav');


    const handleAllStarMembership = () => {
        setName('Kountry Cookin All-Access Membership');
        setPriceId('price_1IE7LRFfRTtewmlrEa5WCQq7')
        setAmount(10);
        setDescription('All-Access Membership Sign-up');
        setPro(false)
        setAllAccess(true)
    
        var element = document.getElementById("subCardAll");
        element.classList.add("active");

        if (allAccess) {
            var element = document.getElementById("subCardAll");
            element.classList.add("active");
        } else {
            var element = document.getElementById("subCardPro");
            element.classList.remove("active");
        }

    }

    const handleProMembership = () => {
        setName('Kountry Cookin Pro Membership');
        setAmount(2);
        setPriceId('price_1IE7JhFfRTtewmlrLM1PCrvn');
        setDescription('Pro Membership Sign-up');
        setAllAccess(false);
        setPro(true);
        var element = document.getElementById("subCardPro");
        element.classList.add("active");
        if (pro) {
            var element = document.getElementById("subCardPro");
            element.classList.add("active");
        } else {
            var element = document.getElementById("subCardAll");
            element.classList.remove("active");
        }

    }

    const handleCheckout = async (e) => {

        try {
            let res = await fetch('/api/donate/create-checkout-session', {
                method: 'POST',
                body: JSON.stringify({ amount, description, name, mode, recurring, customer_id, email, priceid }),
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

    return (
        <>
            <Header color='header-dark' />
            <main className="subscription">
                <div className="container py-4">
                    <div id="title" className="row justify-content-center">
                        <h2>Choose your subscription</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div id="subCardPro" class="card text-center active my-3" onClick={(e) => handleProMembership()}>
                                <div class="card-header py-4">
                                    <h4>Kountry Cookin Pro Membership</h4>
                            </div>
                                <div id="cardBody" class="card-body">
                                    <h5 class="card-title">2$ Month</h5>
                                    <p class="card-text">Get access to all of our recipes</p>
                                    <button onClick={(e) => handleCheckout()} class="btn btn-primary">Sign Up</button>
                                </div>
                                <div class="card-footer text-muted py-4">
                                    Featured
  </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div id="subCardAll" class="card text-center my-3" onClick={(e) => handleAllStarMembership()}>
                                <div class="card-header py-4">
                                    <h4>Kountry Cookin All Access Membership</h4>
  </div>
                                <div id="cardBody" class="card-body">
                                    <h5 class="card-title">10$ Month</h5>
                                    <p class="card-text">Feature your recipe in our cookbook</p>
                                    <button onClick={(e) => handleCheckout()} className="btn btn-primary">Sign Up</button>
                                </div>
                                <div class="card-footer text-muted py-4">
                                    All Access
  </div>
                            </div>
                        </div>
                    </div>
                </div>
                {(pro) ? <div className="container">
                    <div className="row p-4">
                        <div className="row p-4">
                            <div className="col-xl-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="row py-2 text-center">
                                    <h6>Kountry Cookin Pro Membership</h6>
                                </div>
                                <div className="row justify-content-center">
                                    <p>Enjoy unlimited access to each and every one of our recipes for an affordable price. This membership includes access to our monthly emailed newsletter. Each month we send a special newsletter in which we would love to have you be apart of. This will include tips for cooking, recipes of the week, and a special suprise. We send our newsletter on the first day of each month. Consider upgrading to our All Access Membership if you would like access to weekly emailed & mailed newsletters. </p>
                                </div>
                                <div className="row">
                                    <h6 className="">Included Items:</h6>
                                </div>
                                <div className="row">
                                    <ul>
                                        <li>Unlimited access to our recipe store</li>
                                        <li>Weekly emailed newsletters</li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <h6 className="text-left">Doesn't Include:</h6>
                                </div>
                                <div className="row">

                                    <ul>
                                        <li>Access to our mailed monthly newsletter & suprise</li>
                                        <li>Access to our monthly magazine</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> :
                    <div className="container">
                        <div className="row p-4">
                            <div className="row p-4">
                                <div className="col-xl-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row py-4 text-center">
                                        <h6>Kountry Cookin All Access Membership</h6>
                                    </div>
                                    <div className="row justify-content-center">
                                        <p>Enjoy unlimited access to each and every one of our recipes for an affordable price. This membership includes access to our monthly emailed newsletter. Each month we send a special magazine in which we would love to have you be apart of. This will include tips for cooking, recipes of the week, and a special suprise. We deliver our magazines on the first day of each month. Consider downgrading to our Pro Membership if you would only like access to our monthly newsletter and online recipe store. </p>
                                    </div>
                                    <div className="row">
                                        <h6>Included Items:</h6>
                                    </div>
                                    <div className="row">
                                        <ul>
                                            <li>Unlimited access to our recipe store</li>
                                            <li>Access to our emailed monthly newsletter</li>
                                            <li>Access to our mailed monthly newsletter & suprise</li>
                                            <li>Access to submit featured recipes to our store</li>
                                            <li>Featured recipes to be included in our monthly magazine</li>
                                        </ul>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>}


            </main>
            <Footer />

        </>
    )
}
