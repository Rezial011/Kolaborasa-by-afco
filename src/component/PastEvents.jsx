import React, { useState } from "react";
import EventPopup from './EventPopup';
import bogor from '../assets/bogorfest.png';
import braga from '../assets/braga.png';
import jajanan from '../assets/jajanan.png';

//assets image untuk detail gambar di dalam learn more
//bogorfest
import senam from '../assets/bogorfest/senam.png';
import cek from '../assets/bogorfest/cekMedis.png';
import crowd from '../assets/bogorfest/crowd.png';

//braga
import ngabuburit from '../assets/braga/ngabuburit.png';
import jajan from '../assets/braga/jajan.png';
import makan from '../assets/braga/makan.png';

//jajanan viral
import night from '../assets/jajananViral/night.png';
import view from '../assets/jajananViral/view.png';
import nightView from '../assets/jajananViral/nightView.png';

export default function PastEvents() {
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Data event dengan detail lengkap
    const eventsData = [
        {
            id: 1,
            title: "BogorFest 2023",
            date: "24-27 August 2023",
            location: "Stadion Pakansari, Bogor",
            image: bogor,
            description: "A massive festival featuring music performances, art shows, exhibitions, and culinary delights.",
            fullDescription: "BogorFest 2023 was a spectacular 4-day festival that brought together over 50,000 visitors from across Indonesia. The event featured more than 100 local and international artists, 80 food vendors, art exhibitions, and cultural performances. This festival became one of the largest cultural events in West Java, showcasing the rich heritage and modern creativity of Bogor.",
            highlights: [
                "50+ Musical performances from local and international artists",
                "80+ Food vendors featuring traditional and modern cuisine",
                "Art exhibitions from 30+ local artists",
                "Cultural performances and traditional dance shows",
                "Interactive workshops and community activities"
            ],
            gallery: [
                senam,
                cek, // placeholder images for demo
                crowd
            ],
            attendance: "50,000+ visitors",
            artists: "50+ performers"
        },
        {
            id: 2,
            title: "Braga Ngabuburit Festival",
            date: "15 March - 6 April 2025",
            location: "Braga City Walk, Bandung",
            image: braga,
            description: "A Ramadan-themed culinary festival featuring 19 food booths, cultural performances, and religious activities.",
            fullDescription: "Braga Ngabuburit Festival was a month-long celebration during Ramadan that transformed Braga Street into a vibrant cultural hub. The festival combined traditional Islamic values with modern festival experiences, featuring halal culinary experiences, spiritual activities, and community bonding events.",
            highlights: [
                "19 specialized halal food booths",
                "Daily breaking fast (Iftar) communal events",
                "Traditional Islamic music performances",
                "Religious lectures and spiritual activities",
                "Community charity drives and social activities"
            ],
            gallery: [
                ngabuburit,
                jajan, // placeholder images for demo
                makan
            ],
            attendance: "25,000+ visitors",
            duration: "23 days"
        },
        {
            id: 3,
            title: "Jajanan Viral 2024",
            date: "June - July 2024",
            location: "Botani Square Mall, Bogor",
            image: jajanan,
            description: "A family-friendly event featuring colorful activities for kids, music performances, and diverse culinary experiences.",
            fullDescription: "Jajanan Viral 2024 was a month-long family festival designed to create joyful memories for children and parents. The event featured interactive play zones, educational workshops, colorful entertainment, and family-friendly dining experiences in a safe, indoor environment.",
            highlights: [
                "Interactive color-themed play zones",
                "Children's cooking workshops and food education",
                "Family entertainment shows and puppet performances",
                "Art and craft activities for kids",
                "Parent-child bonding activities and games"
            ],
            gallery: [
                night,
                view, // placeholder images for demo
                nightView
            ],
            attendance: "15,000+ families",
            activities: "20+ interactive zones"
        }
    ];

    const openPopup = (event) => {
        setSelectedEvent(event);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closePopup = () => {
        setSelectedEvent(null);
        document.body.style.overflow = 'unset'; // Restore scrolling
    };

    return (
        <>
            <section className="events" id="events">
                <div className="section-title">
                    <h2>Our Past Events</h2>
                </div>
                <div className="events-grid">
                    {eventsData.map((event, index) => (
                        <div 
                            key={event.id} 
                            className={`event-card ${index === 0 ? 'event-card-highlight' : ''}`}
                        >
                            <div className="event-image">
                                <img src={event.image} alt={event.title} />
                            </div>
                            <div className="event-details">
                                <h3 className="event-title">{event.title}</h3>
                                <div className="event-info">
                                    <i className="fas fa-calendar"></i>
                                    <span>{event.date}</span>
                                </div>
                                <div className="event-info">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>{event.location}</span>
                                </div>
                                <p className="event-description">{event.description}</p>
                                <button 
                                    className="event-link"
                                    onClick={() => openPopup(event)}
                                >
                                    More Info
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Event Popup */}
            <EventPopup 
                event={selectedEvent} 
                onClose={closePopup} 
            />
        </>
    );
}