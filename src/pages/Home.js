
import React from 'react';
import Header from '../components/Header';
import Posts from '../components/Posts';
import DarkMode from '../components/DarkMode'
import LatestPosts from "../components/LatestPosts"
import Footer from '../components/Footer';

function Home() {
    return (<div>
        <Header />
        {/* <DarkMode /> */}
        <LatestPosts />
        <Posts category="tech" />
        <Posts category="bollywood" />
        <Footer />
    </div>)
}

export default Home;