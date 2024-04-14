
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import EventCard from './EventCard';

const recommendedShowsUrl = 'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco';

const RecommendedShows = () => {
    const [recommendedShows, setRecommendedShows] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        const fetchRecommendedShows = async () => {
            try {
                const response = await axios.get(recommendedShowsUrl);
                setRecommendedShows(response.data.events);
            } catch (error) {
                console.error('Error fetching recommended shows:', error);
            } finally {
                setFetching(false);
            }
        };

        fetchRecommendedShows();
    }, []);

    return (
        <div>
            <h3>Recommended Shows</h3>
            <div className="horizontal-scroll-container">
                {!fetching && (
                    <div className="horizontal-scroll">
                        {recommendedShows.map(show => (
                            <EventCard key={show.eventName} event={show} />
                        ))}
                    </div>
                )}
                {fetching && <p>Loading...</p>}
            </div>
        </div>
    );
};

export default RecommendedShows;
