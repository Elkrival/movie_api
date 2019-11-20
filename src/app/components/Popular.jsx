import React from 'react';
import Card from './Card';

const Popular = ({ movie }) =>{
    const { title, poster } = movie;
    return(
        <div className="top_rated">
            <Card 
                title={ title }
                poster = { poster}
            />
        </div>
    )
  }
export default Popular;