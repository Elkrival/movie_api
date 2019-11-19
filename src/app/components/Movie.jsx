import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Button from './Button';
import { movieInfo } from '../../../store/actions/actions';

const mapDispatchToProps = (dispatch) => ({
    onMovie: id => dispatch(movieInfo(id))
})
const Movie = () =>{
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