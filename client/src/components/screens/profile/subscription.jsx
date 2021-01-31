import React, { useState } from 'react'
import IndeterminateProgress from '../../utilities/indeterminateProgress';

export default function Subscription(props) {
    
    const [customer_id, setCustomer_id] = useState(props.customer_id);


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
            
                
                            <div class="card text-center">
                                <div class="card-header">
                                    Manage Subsciption
                                </div>
                                <div class="card-body">
                                    <p class="card-title">View/Modify your subcription information</p>
                                    <button onClick={(e) => manageSubscriptions()} className="btn btn-primary">Stripe Portal</button>
                                </div>
                                <div class="card-footer text-muted">
                                    View Details
                                </div>
                            </div>
                        
            }
        </>
    )
}
