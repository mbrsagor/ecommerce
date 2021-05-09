import React, { Component } from 'react';
import Feature from './features/feature';
import Feature1 from './features/feature1';
import Feature3 from './features/feature3';
import FooterTop from './features/footerTop';
import Hero from './features/Hero';
import Footer from './Footer';
import FooterBottom from './FooterBottom';
import Header from './Header';



class HomePage extends Component {

    componentDidMount() {
        document.title = "Grow your restaurant with commission-free orders"
    }

    render() {
        return (
            <>
                <Header />
                <Hero />
                <Feature3 />
                <Feature1 />
                <Feature />
                <FooterTop />
                <Footer />
                <FooterBottom />
            </>
        )
    }
}

export default HomePage;
