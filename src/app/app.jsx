import React from 'react';
import Button from './components/Button';
import Hero from './components/Hero';

const App = ({ movies }) => 
    <div>
       <Hero movies={ movies } /> 
    </div>

export default App;