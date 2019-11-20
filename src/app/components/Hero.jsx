import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPopular, getTopRated } from '../../../store/selectors/movies';
import Popular from './Popular';
import TopRated from './TopRated';
import MovieSearch from './Movie_Search';

const mapStateToProps = (state) =>({ popular: getPopular(state), topRated: getTopRated(state)});

class Hero extends Component{ 
  constructor(props) {
    super(props);
    this.state = { popular: [], topRated: [] }
  };
  static getDerivedStateFromProps(props) {
    if (props.popular.length > 0 && props.topRated.length > 0) {
      const { popular, topRated } = props
      return { popular, topRated }
    }
    // Return null to indicate no change to state.
    return null;
  }
  render(){
  return(<div className="Hero">
    <MovieSearch/>
    {this.state.popular.map(movie => <Popular
        key={movie.id}
        movie={movie}
      />)}
    {this.state.topRated.map(movie => <TopRated 
       key={movie.id}
       movie={movie} 
      />)}
  </div>)
}
}
export default connect(mapStateToProps)(Hero);