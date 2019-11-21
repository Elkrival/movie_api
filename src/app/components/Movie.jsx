import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Poster from './Poster'
import Title from './Title';
import Info from './Info';
import { getMovieDetails, getConfig} from '../../../store/selectors/movies';
import { showSelectedMovie } from '../../../store/actions/actions';


const mapStateToProps = (state) => ({  movieDetails: getMovieDetails(state)})
class Movie  extends Component {
    constructor(props) {
        super(props);
        this.state = { movieDetails: {} }
        this.boundActions = bindActionCreators({ showSelectedMovie }, props.dispatch)

    }
    componentDidMount() {
        let { id } = this.props.match.params;
        let action = showSelectedMovie(id);
        this.props.dispatch(action)
    }
    
    handleDetails() {
        const query = this.state.id;
        this.props.onDetails(query);
    };
    static getDerivedStateFromProps(props) {
        const { movieDetails } = props
        return {
            movieDetails
        }
    }
    render() {
        return (
            <div>
                {/* <Poster imagePath={ imagePath } />
                <Title title={ title } />
                <Info synopsis={ overview } /> */}
                Hi
            </div>
        )
    }
}
export default connect(mapStateToProps, null)(Movie);