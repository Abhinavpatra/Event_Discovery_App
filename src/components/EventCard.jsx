import React from 'react';

const EventCard = ({ event }) => {
    return (
        <div className="event-card" style={{ fontFamily: 'Inter', backgroundColor: '#ffffff', color: '#1E2022', border: '1px solid #B0BABF', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
            <img src={event.imgUrl} alt={event.eventName} style={{ width: '100%', height: 'auto', borderRadius: '8px 8px 0 0', marginBottom: '10px' }} />
            <h3 style={{ color: '#1E2022', fontSize: '20px', marginBottom: '10px' }}>{event.eventName}</h3>
            <p style={{ color: '#989090', fontSize: '16px', marginBottom: '5px' }}>{event.cityName}</p>
            <p style={{ color: '#989090', fontSize: '16px', marginBottom: '5px' }}>{new Date(event.date).toLocaleDateString()}</p>
            <p style={{ color: '#989090', fontSize: '16px', marginBottom: '5px' }}>{event.weather}</p>
            <p style={{ color: '#989090', fontSize: '16px', marginBottom: '5px' }}>{event.distanceKm} km away</p>
        </div>
    );
};

export default EventCard; 
