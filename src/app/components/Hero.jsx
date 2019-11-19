import React from 'react';
import Popular from './Popular';
import TopRated from './TopRated';

const Hero = ({ movies }) =>
  <div className="Hero">
    {(movies || []).map(movie =>
      <Popular
        key={movie.id}
        movie={movie}
      />
    )}
    {(movies || []).map(movie =>
      <TopRated 
       key={movie.id}
       movie={movie} 
      />
    )}
  </div>
export default Hero;