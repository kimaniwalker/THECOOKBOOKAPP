import React, { useState, useEffect } from 'react'
import * as userService from "../../../services/user";
import Header from '../../header';
import Footer from '../../footer';
import IndeterminateProgress from '../../utilities/indeterminateProgress';
import '../../../utils/scss/pages/_profile.scss';
import Subscription from '../profile/subscription';


export default function Profile(props) {

    const [user, setUser] = useState([]);
    const [customer, setCustomer] = useState('');
    const [customer_id , setCustomerId] = useState(null);




    useEffect(() => {
        getUser();
    }, []);


    const getUser = async () => {
        try {

            let res = await userService.getUser();
            console.log(res)
            setUser(res);
            setCustomerId(res.customer_id);


        } catch (e) {
            console.log(e);
        }
    }

    const getCustomer = async () => {
        let customerObject = {
            customer_id: user.customer_id
        }

        try {
            let res = await fetch('/api/donate/getCustomer', {
                method: 'POST',
                body: JSON.stringify(customerObject),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            console.log(res)
            setCustomer(res)
        } catch (e) {
            console.log(e);

        }


    }



    return (
        <>
            <Header color='header-dark' />
            <main className="profile">

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="container bg-light py-4">
                    
                                {/* <div className="row justify-content-center py-2">
                                    <img id="avatar" src={`../../../images/home/${user.profile_picture_link}`}></img>
                                </div> */}
                                <div className="row justify-content-center py-2">
                                    <h2>Welcome , {user.first_name}</h2>
                                </div>
                                <div className="row justify-content-center py-2">
                                
                                <span><i class="fas fa-envelope-square fa-2x p-2"></i>{user.email}</span>
                                
                                </div>
                                <div className="row justify-content-center py-2">
                                
                                
                                <span><i class="fas fa-phone fa-2x p-2"></i>{user.phone}</span>
                                </div>
                                <div className="row justify-content-center py-2">
                                
                                
                                <span><i class="fas fa-home fa-2x p-2"></i>{user.address}, {user.city} , {user.state} {user.zipcode}</span>
                                </div>

                            </div>

                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="container py-2">
                               {customer_id == null ? <IndeterminateProgress message='Loading ...'/> :<Subscription customer_id={customer_id} /> } 
                            </div>
                            <div className="container py-2">
                               
                            </div>
                            
                            
                            
                        </div>
                    </div>
                </div>

            </main>
            
        </>
    )


}