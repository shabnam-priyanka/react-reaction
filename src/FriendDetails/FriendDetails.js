import React, { useState, useEffect } from 'react';
import  { useParams } from 'react-router-dom';


const FriendDetails = () => {
    const {id} = useParams();
    const [details, setDetails] = useState([]);
    // console.log(friendDetails);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data =>{ setDetails(data)
        console.log(details);
        })

    },[])
    return (
        <div>
            <h1>This is Detail Information of Friend </h1>
            <h1>Name: {details.name} </h1>
            <h2>City: {details.city} </h2>
            <h3>E-mail: {details.email} </h3>
            <h4>Phone: {details.phone} </h4>
            <h5>Website: {details.website} </h5>
            
        </div>
    );
};

export default FriendDetails;