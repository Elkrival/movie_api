import React from 'react';
import {
    NavLink
  } from "react-router-dom";
const Poster = ({ poster_path, imagePath }) =>
        <div>
           <img src={`${imagePath }${poster_path}`} />
        </div>
export default Poster;