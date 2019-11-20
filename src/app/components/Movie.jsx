import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import Card from './Card';
import Button from './Button';
import { showSelectedMovie } from '../../../store/actions/actions';

const mapDispatchToProps = (dispatch) => ({
    onMovie: () => dispatch(showSelectedMovie(id))
})
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { popular: [], topRated: [] }
      };
      static getDerivedStateFromProps(props) {
        console.log(props)
        return {}
      }
      render(){ 
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
  }
export default connect(null, mapDispatchToProps)(Movie);