
import React from 'react';
import Header from '../components/Header';
import postsArr from './postsArr';
import Post from './Post';

function SinglePost(){

    var postId = window.location.pathname.split('/')[2]

    let selectedPost = postsArr.filter((post)=>{
        return post.id == postId
    })

    console.log(selectedPost)

    return <div>
        <Header />
        {/* <Posts /> */}
    </div>
}

export default SinglePost;