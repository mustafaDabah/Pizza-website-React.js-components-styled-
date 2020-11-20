import React from 'react'
import {
    FeatureContainer,
    FeatureButton
} from './FeatureElements.js'
function Feature () {
    return (
        <FeatureContainer> 
            <h1>Pizza of the Day </h1>
            <p> Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto' </p>
            <FeatureButton >Order Now </FeatureButton>
        </FeatureContainer>
    )
}

export default Feature 
