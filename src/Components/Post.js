import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from './SinglePost';

const Post = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h2>A lot of post are here</h2>
            {
                posts.map(post => <SinglePost
                key={post.id}
                post={post}
                ></SinglePost>)
            }
        </div>
    );
};

export default Post;