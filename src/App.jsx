import React from 'react';
import Header from './components/Header';
import RecommendedShows from './components/RecommendedShows';
import UpcomingEvents from './components/UpcomingEvents';
import HorizontalScroll from './components/HorizontalScroll';
import Navbar from './components/Navbar'; 
import './index.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Navbar />
  
            <div className="background-image">
                <div className="background-text">
                    <h1>Discover exciting new Events happening Near you</h1>
                    <h2>Stay tuned for updates</h2>
                    <h7>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae deleniti nobis atque sed corporis corrupti repellendus perferendis veritatis vitae, quia nemo voluptate asperiores praesentium minus, minima, architecto illum. Vitae, dolores?</h7>
                </div>
            </div> 
            
            <HorizontalScroll> 
                <RecommendedShows />
            </HorizontalScroll>
            
            <h3>Upcoming Events</h3>
            <UpcomingEvents />
        </div>
    );
};

export default App;
