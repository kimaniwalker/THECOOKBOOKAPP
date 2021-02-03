import React, { useState, useEffect } from 'react'
import * as userService from "../../../services/user";
import Header from '../../header';
import Footer from '../../footer';
import IndeterminateProgress from '../../utilities/indeterminateProgress';
import '../../../utils/scss/pages/_profile.scss';
import Customer from '../profile/customer';


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


    return (
        <>
            <Header color='header-dark' />
            <main className="profile">

                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            
                            <div className="container py-4">
                                {/* <div className="row justify-content-center py-2">
                                    <img id="avatar" src={`../../../images/home/${user.profile_picture_link}`}></img>
                                </div> */}
                            {customer_id == null ? <IndeterminateProgress message='Loading ...'/> :<Customer customer_id={customer_id} /> } 
                            </div>

                        </div>
                    </div>
                </div>

            </main>
            <Footer />
            
        </>
    )


}