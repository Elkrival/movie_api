import React, { Component } from 'react';
import Card from './Card';
import Button from './Button';

class Popular extends Component {
    constructor(props){
        super(props)
        this.state = { query: 'popular'}
        console.log(props)
        
    }

    render(){
        const { title, poster } = this.props
        return (
            <div className="top_rated">
            <Card 
                title={ title }
                poster={ poster}
            />
            <Button btnText="click"/>
        </div>
        )
    }
}
export default Popular;