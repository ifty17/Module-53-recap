import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SinglePost.css';

const SinglePost = ({post}) => {
    const {id, title, body} = post;

    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='singlePost'>
            <h4>{title}</h4>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Visit {id}</Link>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Show Details 2</button>
        </div>
    );
};

export default SinglePost;