import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Hero from './components/Hero';
import Movie from './components/Movie';

const App = () => 
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Hero} />
                <Route exact path="/movie/:id" component={Movie} />
            </Switch>
        </div>
    </Router>
export default App;