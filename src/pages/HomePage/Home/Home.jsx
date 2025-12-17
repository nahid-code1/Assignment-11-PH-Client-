import React from 'react';
import Logo from '../Banner/Banner';
import Banner from '../Banner/Banner';
import Coverage from '../Coverage/Coverage';
import ChooseUs from '../ChooseUs/ChooseUs';
import HowItWorks from '../HowItWorks/HowItWorks';
import TrustedBy from '../TrustedBy/TrustedBy';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Coverage></Coverage>
            <ChooseUs></ChooseUs>
            <HowItWorks></HowItWorks>
            <TrustedBy></TrustedBy>
        </div>
    );
};

export default Home;