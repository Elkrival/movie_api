import React from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import Card from './Card';
import Button from './Button';
import { showSelectedMovie } from '../../../store/actions/actions';

// let id = useParams()
const mapDispatchToProps = (dispatch) => ({
    onMovie: () => dispatch(showSelectedMovie(id))
})
const Movie = ({ movie }) =>{
    return(
        <div className="top_rated">
            <Card 
                title='This is'
                poster='A single'
            />
            <Button btnText="hola"/>
        </div>
    )
  }
export default connect(null, mapDispatchToProps)(Movie);