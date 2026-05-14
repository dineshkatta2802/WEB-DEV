import React from 'react';
import { Fragment } from 'react';
import Post from './INDIVIDUAL_COMPONENT/Post'

export default function PostList({posts = []}){ //Passed the array of posts
    // Rnedering the list of Posts
    return(
        <div>
            <h2><u>Post List</u></h2>
            {posts.map((mssg, index) => (
                <Fragment key={index}>
                    <Post {...mssg}/>
                    <hr />
                </Fragment>
            ))} 
        </div>
    );
}