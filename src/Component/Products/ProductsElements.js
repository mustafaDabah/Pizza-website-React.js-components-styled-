import styled  from 'styled-components';

export const ProductContainer = styled.div ` 
    width:100%;
    min-height:100vh;
    padding:5rem calc((100% - 1300px ) / 2 );
    background:#150f0f;
    color:#fff;
`
export const ProductHeader  = styled.div ` 
    font-size:clamp(2rem , 2.5vw , 3rem);
    text-align:center;
    margin-bottom:5rem
`
export const ProductWrapper = styled.div ` 
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    margin: 0 auto; 
    align-items:center;
`
export const ProductCard = styled.div ` 
    width:300px;
    margin: 0rem 1rem ;
    line-height:2;
`
export const  ProductImg = styled.img ` 
    height:300px;
    min-height:300px;
    max-width:100%;
    box-shadow:8px 8px #fdc500;
` 
export const ProductInfo = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:2rem;
    text-align:center;
`
export const ProductTitle = styled.h2 `
    font-size:1.5rem;
    font-weight:500px;

` 
export const ProductDesc = styled.p ` 
    margin-bottom:1rem
`
export const ProductPrice = styled.p ` 
    margin-bottom:1rem;
    font-size:2rem;
` 
export const  ProductButton = styled.button ` 
    font-size:1rem;
    padding:1rem 4rem;
    border:none;
    background-color:#e31837;
    color:#fff;
    transition:0.2s ease-out;
    &:hover {
        background:#ffc500;
        color:#000;
        cursor: pointer;
        transition:0.2s ease-out;
    }
` 