import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../../store/selectors/movies';
import { movieInfo } from '../../../store/actions/actions'
import Popular from './Popular';
import TopRated from './TopRated';

const mapStateToProps = (state) =>({ movies: getMovies(state)});
const mapDispatchToProps = dispatch => ({
  onMovieInfo: id => dispatch(movieInfo(id))
})

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
export default connect(mapStateToProps, mapDispatchToProps)(Hero);