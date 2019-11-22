import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { doFetchMovies, receiveConfig} from '../../../store/actions/actions';
import { getPopular, getTopRated, getConfig } from '../../../store/selectors/movies';
import Popular from './Popular';
import TopRated from './TopRated';

const mapStateToProps = (state) =>({ popular: getPopular(state), topRated: getTopRated(state), config: getConfig(state)});

class Hero extends Component{ 
  constructor(props) {
    super(props);
    this.state = { popular: [], topRated: [], config: {} }
    this.boundActions = bindActionCreators({ doFetchMovies, receiveConfig }, props.dispatch)
  };
  componentDidMount() {
    let fetchPopularAction = doFetchMovies('popular');
    this.props.dispatch(fetchPopularAction);
    let fetchTopRatedAction = doFetchMovies('top_rated');
    this.props.dispatch(fetchTopRatedAction);
    let getConfig = receiveConfig();
    this.props.dispatch(getConfig);
  }
  
  static getDerivedStateFromProps(props) {
    if (props.popular.length > 0 && props.topRated.length > 0) {
      const { popular, topRated, config } = props
      return { popular, topRated, config }
    }
    // Return null to indicate no change to state.
    return null;
  }
  render(){
  return(
    <div className="wrapper">
    <div className="title_container"><h1 className="headers">Popular</h1></div>
    <div className="card_container">
        {this.state.popular.map(movie => 
        <NavLink to={`/movie/popular/${ movie.id }`}><Popular
          key={movie.id}
          movie={movie}
          config={ this.state.config.images }
        />
        </NavLink>)}
      </div>
      <div className="title_container"><h1 className="headers"> Top Rated</h1></div>
      <div className="card_container">
          {this.state.topRated.map(movie => 
            <NavLink to={`/movie/top/${ movie.id }`}>
              <TopRated 
                key={movie.id}
                movie={movie}
                config={ this.state.config.images } />
            </NavLink>)}
      </div>
      </div>)
  }
}
export default connect(mapStateToProps)(Hero);