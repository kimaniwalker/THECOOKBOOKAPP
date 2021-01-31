import React, { useState, useEffect } from 'react'
import IndeterminateProgress from '../../utilities/indeterminateProgress';
import '../../../utils/scss/pages/_customer.scss'

export default function Customer(props) {

    const [customer_id, setCustomer_id] = useState(props.customer_id);
    const [customer, setCustomer] = useState([]);
    const [address, setAddress] = useState([]);
    const [subscription, setSubscription] = useState([]);
    const [plan , setPlan] = useState([]);


    useEffect(() => {
        getCustomer();
    }, []);



    const getCustomer = async () => {
        let customerObject = {
            customer_id: customer_id
        }

        try {
            let res = await fetch('/api/donate/getCustomer', {
                method: 'POST',
                body: JSON.stringify(customerObject),
                headers: new Headers({ "Content-Type": "application/json" })

            });

            let customerInfo = await res.json();
            console.log(customerInfo)
            setCustomer(customerInfo);
            setAddress(customerInfo.address)
            setPlan(customerInfo.subscriptions.data[0].plan);
            setSubscription(customerInfo.subscriptions.data[0]);
        } catch (e) {
            console.log(e);
        }

    }

    const manageSubscriptions = async () => {
        let customerInfo = {
            customer: customer_id,
            return_url: 'http://localhost:3000/profile'
        }

        try {
            let res = await fetch('/api/donate/customer-portal', {
                method: 'POST',
                body: JSON.stringify(customerInfo),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            console.log(res)
            let session = await res.json();
            window.location.replace(session.url);
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <>

            {customer_id == null ? <IndeterminateProgress message="Loading ..." /> :
                <>

                    <main className="customers">
                    <div className="container">
                        <div className="col-12">
                            <div className="row text-center py-2">
                                <h4>Account Information</h4>
                            </div>
                        </div>

                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="accordion accordion-flush" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Personal Information
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="p-2"><strong>Name:</strong> <span>{customer.name}</span></div>
                                                            <div className="p-2"><strong>Phone:</strong> <span>{customer.phone}</span></div>
                                                            <div className="p-2"><strong>City:</strong> <span>{address.city}</span></div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="p-2"><strong>Email:</strong> <span>{customer.email}</span></div>
                                                            <div className="p-2"><strong>Address:</strong> <span>{address.line1}</span></div>
                                                            <div className="p-2"><strong>State:</strong> <span>{address.state}</span></div>
                                                        </div>


                                                        

                                                    </div>
                                        

                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Subscription Information
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <div className="row justify-conte">
                                                    <div className="col-6">
                                                            <div className="p-2"><strong>Plan Name:</strong> <span>{customer.name}</span></div>
                                                            <div className="p-2"><strong>Plan Amount:</strong> <span>{plan.amount}</span></div>
                                                            <div className="p-2"><strong>Billing Cycle:</strong> <span>{plan.interval}</span></div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="p-2"><strong>Period Start:</strong> <span>{subscription.current_period_start}</span></div>
                                                            <div className="p-2"><strong>Period End:</strong> <span>{subscription.current_period_end}</span></div>
                                                            <div className="p-2"><strong>Account Status:</strong> <span>{subscription.status}</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="row text-center py-4">
                                                    <button onClick={(e) => manageSubscriptions()} className="btn btn-primary">Modify My Subscription</button>
                                                    </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Billing Information
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <code>We actually do not store any of your card or bank account information. We let strie do all of the dirty work allowing us to stay PCI compliant.</code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </main>
                </>

            }
        </>
    )
}
