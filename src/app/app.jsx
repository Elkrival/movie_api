import React from 'react';
import Hero from './components/Hero';
import MovieSearch from './components/Movie_Search';

const App = () => 
    <div>
        <div>
            <MovieSearch/>
        </div>
        <div>
            <Hero/> 
        </div>
    </div>

export default App;