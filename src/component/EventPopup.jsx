import React, { useEffect } from 'react';

export default function EventPopup({ event, onClose }) {
  // Close popup when pressing ESC key
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (event) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [event, onClose]);

  if (!event) {
    return null;
  }

  return (
    <div className={`popup-overlay ${event ? 'show' : ''}`} onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="popup-header">
          <div className="popup-title-section">
            <h2 className="popup-title">{event.title}</h2>
            <div className="popup-basic-info">
              <div className="popup-info-item">
                <i className="fas fa-calendar"></i>
                <span>{event.date}</span>
              </div>
              <div className="popup-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{event.location}</span>
              </div>
            </div>
          </div>
          <button className="popup-close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        {/* Body */}
        <div className="popup-body">
          {/* Event Stats */}
          <div className="popup-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-info">
                <span className="stat-number">{event.attendance}</span>
                <span className="stat-label">Attendance</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="stat-info">
                <span className="stat-number">{event.artists || event.duration || event.activities}</span>
                <span className="stat-label">{event.artists ? 'Artists' : event.duration ? 'Duration' : 'Activities'}</span>
              </div>
            </div>
          </div>

          {/* Main Description */}
          <div className="popup-description">
            <h3>About This Event</h3>
            <p>{event.fullDescription}</p>
          </div>

          {/* Event Highlights */}
          <div className="popup-highlights">
            <h3>Event Highlights</h3>
            <ul className="highlights-list">
              {event.highlights.map((highlight, index) => (
                <li key={index} className="highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo Gallery */}
          <div className="popup-gallery">
            <h3>Event Gallery</h3>
            <div className="gallery-grid">
              {event.gallery.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`${event.title} Gallery ${index + 1}`} />
                  <div className="gallery-overlay">
                    <i className="fas fa-expand"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="popup-actions">
            
          </div>
        </div>
      </div>
    </div>
  );
}