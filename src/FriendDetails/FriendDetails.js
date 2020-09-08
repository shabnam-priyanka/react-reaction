import React, { useState, useEffect } from 'react';
import  { useParams } from 'react-router-dom';


const FriendDetails = () => {
    const {id} = useParams();
    const [friendDetails, setFriendDetails] = useState([]);
    console.log(id);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => setFriendDetails(data))
    },[])
    return (
        <div>
            {/* <h1>This is friend detail information:{friedDetails.name} </h1> */}
        </div>
    );
};

export default FriendDetails;