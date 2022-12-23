
import React from 'react';
import Header from '../components/Header';
import Posts from '../components/Posts';
import DarkMode from '../components/DarkMode'
import LatestPosts from "../components/LatestPosts"

function Home() {
    return (<div>
        <Header />
        <DarkMode />
        <LatestPosts />
        <Posts />
    </div>)
}

export default Home;