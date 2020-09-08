import React, { useState, useEffect } from 'react';
import Friends from '../Friends/Friends';

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div>
            <h1>friends:{friends.length} </h1>
            {
                friends.map(friend =><Friends friend={friend}> </Friends>)
            }
        </div>
    );
};

export default Home;