import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Poster from './Poster'
import Title from './Title';
import Info from './Info';
import Modal from './Modal';
import { getMovieDetails, getConfig} from '../../../store/selectors/movies';
import { showSelectedMovie, receiveConfig } from '../../../store/actions/actions';


const mapStateToProps = (state) => ({  movieDetails: getMovieDetails(state), config: getConfig(state)})
class Movie  extends Component {
    constructor(props) {
        super(props);
        this.state = { movieDetails: {}, show: false, config: {}, videoId: '' }
        this.boundActions = bindActionCreators({ showSelectedMovie, receiveConfig }, props.dispatch)

    }
    componentDidMount() {
        let { id } = this.props.match.params;
        let action = showSelectedMovie(id);
        this.props.dispatch(action)
        let getConfig = receiveConfig();
        this.props.dispatch(getConfig);
    }
    static getDerivedStateFromProps(props) {
        const { movieDetails, config } = props
        return {
            movieDetails, config
        }
    }
    showModal() {
        const videoId = this.props.movieDetails.videos.results.find(el => el.site === 'YouTube' && el.type === 'Trailer').key;
        this.setState({show: true, videoId}, function () {
            console.log(this.state.show, this.state.videoId);
        });
      };
    
      hideModal() {
        this.setState({show: false}, function () {
            console.log(this.state.show);
        });
      };
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
                <div className="btn btn-play" onClick={() => this.showModal()}><span> Watch Trailer</span></div>
                <Modal videoId={ this.state.videoId }show={this.state.show} handleClose={() => this.hideModal()} />
                   
            </div>
        )
    }
}
export default connect(mapStateToProps, null)(Movie);