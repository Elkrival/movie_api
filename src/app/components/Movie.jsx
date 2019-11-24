import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Poster from './Poster'
import Title from './Title';
import Info from './Info';
import { getMovieDetails, getConfig} from '../../../store/selectors/movies';
import { showSelectedMovie, receiveConfig, openCloseModal } from '../../../store/actions/actions';
import { SHOW_HIDE_MODAL } from '../../../store/actions/action_types';


const mapStateToProps = (state) => ({  movieDetails: getMovieDetails(state), config: getConfig(state)})
class Movie  extends Component {
    constructor(props) {
        super(props);
        this.state = { movieDetails: {}, config: {}, videoId: '' }
        this.boundActions = bindActionCreators({ showSelectedMovie, receiveConfig, openCloseModal }, props.dispatch)

    }
    componentDidMount() {
        let { id } = this.props.match.params;
        let getMovieDetails = showSelectedMovie(id);
        this.props.dispatch(getMovieDetails)
    }
    static getDerivedStateFromProps(props) {
        const { movieDetails, config } = props
        return {
            movieDetails, config
        }
    }
    openModal() {
        let openModal = openCloseModal({ type: SHOW_HIDE_MODAL, payload :true });
        this.props.dispatch(openModal);
    }
    render() {
        const { overview, title, runtime, poster_path, vote_average } = this.state.movieDetails;
        const { images } = this.state.config;
        const  imagePath = `${ images.base_url }/${ images.backdrop_sizes[1]}${ poster_path}`
        return (
            <div className="details_container">
                <Poster className="details_image" imagePath={ imagePath } />
                <Title className="details_title" title={ title } />
                <Info className="details_synopsis" synopsis={ overview } />
                <span><Title title={ `Runtime: ${runtime} minutes`}/><Title title={`Rating ${vote_average} / 10`}/></span>
                <div className="btn btn-play" onClick={() => this.openModal()}><span> Watch Trailer</span></div>
            </div>
        )
    }
}
export default connect(mapStateToProps, null)(Movie);