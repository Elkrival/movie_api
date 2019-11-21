import React from 'react';
import Card from './Card';

const TopRated = ({ movie }) =>{
    const { title, poster_path, id } = movie;
    return(
        <div className="top_rated">
            <Card 
                title={ title }
                poster_path={ poster_path }
                id={id}
            />
        </div>
    )
  }
export default TopRated;