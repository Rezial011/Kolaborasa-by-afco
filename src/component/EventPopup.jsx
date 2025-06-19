import React, { useEffect, useState } from 'react';

export default function EventPopup({ event, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // Reset image index when event changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [event]);

  if (!event) {
    return null;
  }

  const handleImageNavigation = (direction) => {
    if (!event.gallery) return;
    
    setCurrentImageIndex(prevIndex => {
      if (direction === 'next') {
        return (prevIndex + 1) % event.gallery.length;
      } else {
        return prevIndex === 0 ? event.gallery.length - 1 : prevIndex - 1;
      }
    });
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

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
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
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
                <span className="stat-number">{event.artists || event.duration || event.activities || event.vendors}</span>
                <span className="stat-label">{event.artists ? 'Artists' : event.duration ? 'Duration' : event.activities ? 'Activities' : 'Vendors'}</span>
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
              {event.highlights?.map((highlight, index) => (
                <li key={index} className="highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Photo Gallery */}
          <div className="popup-gallery">
            <h3>Event Gallery</h3>
            <div className="gallery-container">
              {/* Main Image Display */}
              <div className="gallery-main">
                <div className="main-image-container">
                  <img 
                    src={event.gallery?.[currentImageIndex]} 
                    alt={`Gallery ${currentImageIndex + 1}`}
                    className="main-image"
                  />
                  
                  {/* Navigation Arrows */}
                  {event.gallery && event.gallery.length > 1 && (
                    <>
                      <button 
                        className="gallery-nav gallery-nav-prev"
                        onClick={() => handleImageNavigation('prev')}
                      >
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <button 
                        className="gallery-nav gallery-nav-next"
                        onClick={() => handleImageNavigation('next')}
                      >
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  {event.gallery && event.gallery.length > 1 && (
                    <div className="image-counter">
                      {currentImageIndex + 1} / {event.gallery.length}
                    </div>
                  )}
                </div>
              </div>

              {/* Thumbnail Strip */}
              {event.gallery && event.gallery.length > 1 && (
                <div className="gallery-thumbnails">
                  {event.gallery.map((image, index) => (
                    <div
                      key={index}
                      className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}