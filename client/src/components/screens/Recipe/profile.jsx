import React, { useState,useEffect } from 'react'
import IndeterminateProgress from '../../utilities/indeterminateProgress';


export default function Profile(props) {

    const [user, setUser] = useState([]);
    const [checkingLogin, setcheckingLogin] = useState(true);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async() => {
        try {

            let res = await fetch('/api/users/me', {
                method: 'GET',
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let userObject = await res.json();
            console.log(userObject)
            setUser(userObject);
        } catch (e) {
            console.log(e);
        }
    }



    if (checkingLogin) {
        return <IndeterminateProgress message="Checking Loggin Status....." />;
    } else {
        return (
            <>
            <h2>Testing</h2>
            </>
        )

    }

}
