import React from 'react';
import {
    NavLink
  } from "react-router-dom";
const Poster = ({ imagePath }) =>
        <div>
           <img src={`${imagePath }`} />
        </div>
export default Poster;