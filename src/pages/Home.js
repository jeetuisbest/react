
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Posts from '../components/Posts';
import DarkMode from '../components/DarkMode'
import LatestPosts from "../components/LatestPosts"
import Footer from '../components/Footer';

function Home() {
    const [firstComponentLoaded, setFirstComponentLoaded] = useState(false);
    useEffect(() => {
        // Simulate a 1 second delay in loading the first component
        setTimeout(() => {
            setFirstComponentLoaded(true);
        }, 2000);
    }, []);


    return (<div>
        <Header />
        {/* <DarkMode /> */}
        <LatestPosts />
        {firstComponentLoaded && <Posts category="tech" />}
        {firstComponentLoaded && <Posts category="bollywood" />}
        {firstComponentLoaded && <Footer />}
    </div>)
}

export default Home;