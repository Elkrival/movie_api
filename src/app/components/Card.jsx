import React from 'react';
import Poster from './Poster';
import Title from './Title';

const Card = ({ title, poster_path, id, imagePath }) =>{
    return(
        <div className="card">
            {/* <Title 
                title={ title }
                id={ id }
            /> */}
            <Poster 
                poster_path={ poster_path }
                imagePath={ imagePath }
            />
        </div>
    )
  }
export default Card;