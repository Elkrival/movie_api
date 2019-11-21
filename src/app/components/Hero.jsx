import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
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
  return(
    <div className="wrapper">
    <MovieSearch/>
    <div className="title_container"><h1>Popular</h1></div>
    <div className="card_container">
        {this.state.popular.map(movie => 
        <NavLink to={`/movie/popular/${ movie.id }`}><Popular
          key={movie.id}
          movie={movie}
        />
        </NavLink>)}
      </div>
      <div className="title_container"><h1>Top Rated</h1></div>
      <div className="card_container">
          {this.state.topRated.map(movie => 
            <NavLink to={`/movie/top/${ movie.id }`}>
              <TopRated 
                key={movie.id}
                movie={movie} />
            </NavLink>)}
      </div>
      </div>)
  }
}
export default connect(mapStateToProps)(Hero);