import React from 'react';

export default function Post({title, content, author}){
    return(
        <div>
            <h3>{title}</h3>
            <br />
            <div>{content}</div>
            <br />
            <i>Written by <b>{author}</b></i>
        </div>
    );
}