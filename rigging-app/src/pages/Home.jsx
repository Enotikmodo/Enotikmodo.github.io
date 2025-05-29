import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import TelecomTools from "./TelecomTools";

const Home = () => (
    <>
        <Hero />
        <Features />
        <TelecomTools />
        <CallToAction />
    </>
);

export default Home;
