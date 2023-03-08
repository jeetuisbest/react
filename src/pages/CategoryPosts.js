
import React from 'react';
import Header from '../components/Header';
// import Posts from '../components/Posts';
// import DarkMode from '../components/DarkMode'
import SelectedSectionPosts from "../components/section/SelectedSectionPosts"
import Footer from '../components/Footer';

function Home() {
    return (<div>
        <Header />
        {/* <DarkMode /> */}
        <SelectedSectionPosts />
        {/* <Posts /> */}
        <Footer />
    </div>)
}

export default Home;