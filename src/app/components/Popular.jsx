import React from 'react';
import Card from './Card';

const Popular = ({ movie, config }) =>{
    const { title, poster_path, id } = movie;
    const { base_url, poster_sizes, backdrop_sizes } = config
    const imagePath = `${base_url}/${ backdrop_sizes[0]}${ poster_path}`
    return(
        <Card className="card"
                title={ title }
                poster_path = { poster_path}
                imagePath= { imagePath }
                id= { id } >
            
        </Card>
    )
  }
export default Popular;