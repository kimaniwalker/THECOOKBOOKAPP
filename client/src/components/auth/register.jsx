import React, { useState } from 'react'
import '../../utils/scss/pages/_register.scss';
import Header from '../header';
import Footer from '../footer';
import { Redirect } from 'react-router-dom';
import Subscription from '../subscription';

export default function Register(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [profile_picture_link, setAvatar] = useState('default.jpg')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [customer_id, setCustomer_id] = useState(null)
    const [address, setAddress] = useState('')
    const [zipcode, setzipcode] = useState('')
    const [subscription_start, setStart] = useState(new Date())
    const [subscription_end, setEnd] = useState(new Date())
    const [userCreated, setUserCreated] = useState(false);



    const createCustomer = async () => {



        let customerObject = {
            address: {
                city: city,
                state: state,
                line1: address,
                postal_code: zipcode
            },
            metadata: {
                id: "Steph"
            },
            email: email,
            phone: phone,
            first_name: first_name,
            last_name: last_name

        }

        try {
            let res = await fetch('/api/donate/create-customer', {
                method: 'POST',
                body: JSON.stringify(customerObject),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let sessionResponse = await res.json();
            console.log(sessionResponse)
            setCustomer_id(sessionResponse.id);
            handleUpload();

        } catch (e) {
            console.log(e)
        }
    }

    const registerUser = async () => {
        const userinfo = { email, password, first_name, last_name, profile_picture_link: profile_picture_link.name, phone, city, state, customer_id, address, zipcode, subscription_start, subscription_end }

        try {
            let res = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify(userinfo),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let sessionResponse = await res.json();
            console.log(sessionResponse)
            
            setUserCreated(true);
        } catch (e) {
            console.log(e)
        }


    }

    const handleProfileImg = (e) => {
        setAvatar(e.target.files[0])
    }

    const handleUpload = async (e) => {
        let formdata = new FormData();
        formdata.append("image",profile_picture_link, profile_picture_link.name);

        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch('api/cookbook/image', requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }
    const handleSubmit = async () => {

    }





    if (userCreated) {
        return <Subscription email={email} customer_id={customer_id} />
    } else {
        return (
            <>
                <Header color='header-dark' />
                <main className="register">


                    <div className="container bg-light p-4">

                        {customer_id == null ? <div className="row justify-content-center py-2">
                            <div className="row py-2 text-center">
                                <h4 className="text-dark">Registration Form</h4>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">






                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">





                            </div>
                        </div> : null}


                        {customer_id == null ?
                            <div className="row justify-content-center py-2">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                    <div className="row">
                                        <label className="text-success" for="fname">First Name:</label>
                                    </div>
                                    <div className="row py-2">
                                        <input className="textbox" onChange={(e) => setFirst_name(e.target.value)}></input>
                                    </div>




                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                                    <div className="row">
                                        <label className="text-success" for="fname">Last Name:</label>
                                    </div>
                                    <div className="row py-2">
                                        <input className="textbox" onChange={(e) => setLast_name(e.target.value)}></input>
                                    </div>




                                </div>
                            </div> : null}

                        {customer_id == null ?
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                    <div className="row">
                                        <label className="text-success" for="fname">Phone Number:</label>
                                    </div>
                                    <div className="row py-2">
                                        <input className="textbox" onChange={(e) => setPhone(e.target.value)}></input>
                                    </div>




                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                                    <div className="row">
                                        <label className="text-success" for="fname">Email:</label>
                                    </div>
                                    <div className="row py-2">
                                        <input className="textbox" onChange={(e) => setEmail(e.target.value)}></input>
                                    </div>




                                </div>
                            </div> : null}

                        {customer_id == null ?
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                    <div className="row">
                                        <label className="text-success" for="fname">Address:</label>
                                    </div>
                                    <div className="row py-2">
                                        <input className="textbox" onChange={(e) => setAddress(e.target.value)}></input>
                                    </div>




                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                                    <div className="row">
                                        <label className="text-success" for="fname">City:</label>
                                    </div>
                                    <div className="row py-2">
                                        <input className="textbox" onChange={(e) => setCity(e.target.value)}></input>
                                    </div>




                                </div>
                            </div> : null}

                        {customer_id == null ?
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                                    <div className="row">
                                        <label className="text-success" for="fname">State:</label>
                                    </div>
                                    <div className="row py-2">
                                        <input className="textbox" onChange={(e) => setState(e.target.value)}></input>
                                    </div>




                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                                    <div className="row">
                                        <label className="text-success" for="fname">Password:</label>
                                    </div>
                                    <div className="row py-2">
                                        <input className="textbox" onChange={(e) => setPassword(e.target.value)}></input>
                                    </div>




                                </div>

                            </div> : null}

                        <div className="container py-4">

                            {
                                customer_id == null ? <div className="row justify-content-center">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="row justify-content-center">
                                            <div className="col-9">
                                                <div className="input-group input-group-sm mb-3" >
                                                <input type="file" className="form-control" id="inputGroupFile02"
                                                 onChange={handleProfileImg} />
                                                <label className="input-group-text" for="inputGroupFile02">Upload Profile Image</label>
                                            </div>
                                            </div>
                                            
                                        </div>
                                        <div className="row justify-content-center">
                                            
                                                <button disabled={first_name.length <= 0 || last_name.length <= 0 || phone.length <= 0 || email.length <= 0 || address.length <= 0 || city.length <= 0 || state.length <= 0 || password.length <= 0} onClick={(e) => createCustomer()} className="btn btn-success userBtn">Create User</button>
                                            
                                            
                                        </div>

                                    </div>

                                </div> : null
                            }


                            {
                                customer_id == null ? null : <div className="row justify-content-center py-3">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="row text-center py-3">
                                            <h4>Click continue to choose subscription</h4>
                                        </div>
                                        <div className="row justify-content-center">
                                            <button disabled={customer_id == null} onClick={(e) => registerUser()} className="btn btn-primary userBtn">Continue</button>
                                        </div>

                                    </div>

                                </div>
                            }

                        </div>


                    </div>

                </main>
                <Footer />


            </>
        )
    }
}
