import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Burger of the Day</h1>
            <p>Chicken Italian Tandoori Burger.</p>
        <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    );
};

export default Feature;
