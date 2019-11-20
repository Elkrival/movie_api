import React, { Component } from 'react';
import Card from './Card';

class Popular extends Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
        return (
            <div className="top_rated">
            {/* <Card 
                title={ title }
                poster={ poster}
            /> */}
            <h1>{this.props.title}</h1>
        </div>
        )
    }
}
export default Popular;