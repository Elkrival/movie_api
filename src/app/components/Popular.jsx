import React from 'react';
import Card from './Card';

const Popular = ({ movie }) =>{
    const { title, poster_path, id } = movie;
    return(
        <Card className="card"
                title={ title }
                poster_path = { poster_path}
                id= { id } >
            
        </Card>
    )
  }
export default Popular;