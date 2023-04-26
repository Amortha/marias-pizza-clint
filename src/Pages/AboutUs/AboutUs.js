import React from 'react';
import AboutusBanar from './AboutusBanar';
import SpicyPizza from './SpicyPizza';
import HomeOffers from './HomeOffers';
import Awards from './Awards';
import ChiefTeam from './ChiefTeam/ChiefTeam';


const AboutUs = () => {
    return (
        <div>
            <AboutusBanar></AboutusBanar>
            <SpicyPizza></SpicyPizza>
            <HomeOffers></HomeOffers>
            <ChiefTeam></ChiefTeam>
            <Awards></Awards>
        </div>
    );
};

export default AboutUs;