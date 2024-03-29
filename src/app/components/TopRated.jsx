import React from 'react';
import Card from './Card';

const TopRated = ({ movie, config }) =>{
    const { title, poster_path, id } = movie;
    const { base_url, poster_sizes, backdrop_sizes } = config
    const imagePath = `${base_url}/${ backdrop_sizes[0]}${ poster_path}`
    return(
            <Card 
                title={ title }
                imagePath={ imagePath }
                id={id}
            />
    )
  }
export default TopRated;