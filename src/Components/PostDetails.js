import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post);
    const { id, title, body, userId } = post;
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/friend/${userId}`);
    }
    return (
      <div>
        <h5>Post number: {id}</h5>
        <h3>{title}</h3>
        <p>{body}</p>
        <button onClick={handleNavigate}>Get the author</button>
      </div>
    );
};

export default PostDetails;