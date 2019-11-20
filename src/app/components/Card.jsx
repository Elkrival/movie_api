import React from 'react';
import Poster from './Poster';
import Info from './Info';

const Card = ({ title, poster }) =>{
    
    return(
        <div>
            <Info 
                title={ title }
                poster={ poster }
            />
            <Poster 
                title={ title }
                poster={ poster }
            />
        </div>
    )
  }
export default Card;