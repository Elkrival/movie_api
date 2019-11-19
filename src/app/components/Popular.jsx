import React from 'react';
import Card from './Card';
import Button from './Button';

const Popular = ({ movie }) =>{
    const { title, poster } = movie;
    return(
        <div className="top_rated">
            <Card 
                title={ title }
                poster={ poster}
            />
            <Button btnText="hola"/>
        </div>
    )
  }
export default Popular;