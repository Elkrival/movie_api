import React, { Component } from 'react';
import Card from './Card';

class TopRated extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const { title, poster } = this.props
        return (
            <div className="top_rated">
            <Card 
                title={ title }
                poster={ poster}
            />
        </div>
        )
    }
}
export default TopRated;