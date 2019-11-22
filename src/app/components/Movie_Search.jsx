import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doFetchMovies, doAddMovieConfig} from '../../../store/actions/actions';

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: 'popular',
      topRated: 'top_rated'
    };
    console.log(props)
    this.handlePopular = this.handlePopular.bind(this);
    this.handleTopRated = this.handleTopRated.bind(this);
    this.handleConfig = this.handleConfig.bind(this);
    this.boundActions = bindActionCreators({ doFetchMovies, doAddMovieConfig }, props.dispatch);
  };
  componentDidMount() {
      this.handlePopular();
      this.handleTopRated();
      this.handleConfig()
  }
  
  handlePopular() {
      const query = this.state.popular;
      this.props.onFetchPopular(query);
  };
  handleTopRated(){
      const query = this.state.topRated;
      this.props.onFetchTop(query);
  };
  handleConfig() {
      this.props.onFetchConfig()
  }
  render() {
      return (
          null
      )
  }
}
export default connect(null, mapDispatchToProps)(MovieSearch)