import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { connect } from 'react-redux';
import { getModalState } from '../../store/selectors/utils';
import Hero from './components/Hero';
import Movie from './components/Movie';
import Modal from './components/Modal';

const mapStateToProps = (state) => ({ showModal: getModalState(state) })
const App = ({ showModal }) =>
    <div className={ showModal ? 'overlay-hide-content': 'overlay-content' }>
        <Modal />    
        <Router>
            <div className={ showModal ? 'remove': "wrapper" }>
                <Switch>
                    <Route exact path="/" component={Hero} />
                    <Route exact path="/movie/popular/:id" component={Movie} />
                    <Route exact path="/movie/top/:id" component={Movie} />
                </Switch>
            </div>
        </Router>
    </div>
export default connect(mapStateToProps)(App);