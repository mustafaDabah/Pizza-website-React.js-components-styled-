import styled from 'styled-components';
import FeatureImg from "../../images/Feature.jpg";

export const FeatureContainer = styled.div ` 
    background:linear-gradient( to right , rgba(0,0,0,0.7) , rgba(0,0,0,0.1)), url(${FeatureImg}
    );
    height:100vh;
    max-height:500px;
    background-position:center;
    background-size:cover;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#fff;
    text-align:center;
    justify-content:center ;

    h1 {
        font-size:clamp(3rem , 5vw , 5rem )
    }
    p {
        margin-bottom:2rem;
        font-size:clamp(1rem , 2w , 1rem )
    }
`
export const FeatureButton = styled.button ` 
    font-size:1rem;
    padding:0.6rem 3rem;
    border:none;
    background-color:#ffc500;
    color:#fff;
    transition:0.2s ease-out;
    &:hover {
        background:#e31837;
        color:#000;
        cursor: pointer;
        transition:0.2s ease-out;
    }
`