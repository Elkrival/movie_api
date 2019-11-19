import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../../store/selectors/movies';
import Popular from './Popular';
import TopRated from './TopRated';

const mapStateToProps = (state) =>({ movies: getMovies(state)});

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
export default connect(mapStateToProps)(Hero);