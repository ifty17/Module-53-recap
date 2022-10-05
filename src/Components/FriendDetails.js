import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend);
    
    return (
        <div>
            <h3>Everything you need to know about this person</h3>
            <h1>Details about: {friend.name}</h1>
            <p>Call him: {friend.phone}</p>
            
        </div>
    );
};

export default FriendDetails;