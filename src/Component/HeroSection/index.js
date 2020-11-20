import React , {useState} from 'react'
import Navbar from '../Navbar/index.js'
import Sidebar from '../Sidebar/index.js';
import {HeroContainer , HeroContent , HeroItem , HeroH1 , HeroP , HeroBtn} from './HeroItem.js'
function Hero () {
    const [isOpen , setIsOpen ] = useState(false);
    const toggle =()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
           <HeroContainer>
               <Sidebar toggle={toggle} isOpen={isOpen}/>
               <Navbar toggle={toggle} />
               <HeroContent>
                   <HeroItem>
                       <HeroH1>Greatest Pizza Ever </HeroH1>
                       <HeroP>Ready in 60 secands</HeroP>
                       <HeroBtn>Place Order </HeroBtn>
                   </HeroItem>
               </HeroContent>
           </HeroContainer>

        </>
    )
}

export default Hero 
