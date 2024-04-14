
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';

const upcomingEventsUrl = 'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming';

const UpcomingEvents = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        const fetchUpcomingEvents = async () => {
            try {
                const response = await axios.get(upcomingEventsUrl);
                setUpcomingEvents(response.data.events);
            } catch (error) {
                console.error('Error fetching upcoming events:', error);
            } finally {
                setFetching(false);
            }
        };

        fetchUpcomingEvents();
    }, []);

    return (
        <div className="upcoming-events" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {!fetching && upcomingEvents.map(event => (
                <EventCard key={event.eventName} event={event} />
            ))}
            {fetching && <p>Loading...</p>}
        </div>
    );
};

export default UpcomingEvents;
