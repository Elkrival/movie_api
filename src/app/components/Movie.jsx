import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Button from './Button';
import { getTopRated, getPopular, getMovieInfo} from '../../../store/selectors/movies';
import { showSelectedMovie } from '../../../store/actions/actions';

const mapStateToProps = (state, ownProps) =>{
   if(ownProps.match.path.includes('popular')) {
       return { movieList: getPopular(state)};
   }
   if(ownProps.match.path.includes('top')) {
    return { movieList: getTopRated(state)};
    }
    if(state.currentMovieState.hasOwnProperty('title')) {
        return { currentMovie: getMovieInfo(state) }
    }
}
const Movie = (props) =>{
    const id = props.match.params.id
    props.dispatch(showSelectedMovie({ id, selectedMovieList: props.movieList}))
    const movie = props.movieList.filter(el => el.id === +id)[0];
    const { title } = movie;
    return (
        <div>
            <Card title={ title } />
            Hi
        </div>
    )
}
export default connect(mapStateToProps)(Movie);