import React from 'react';
import Card from './Card';
import {
    Link
  } from "react-router-dom";
const Popular = ({ movie }) =>{
    const { title, poster, id } = movie;
    return(
        <div className="top_rated">
            <Link to={`/movie/popular/${ id }`}><Card 
                title={ title }
                poster = { poster}
            />
            </Link>
        </div>
    )
  }
export default Popular;