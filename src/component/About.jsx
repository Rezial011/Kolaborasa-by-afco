import React, { useState, useEffect, useRef } from "react";
import logo from '../assets/logo (1).png';
import kuliner from '../assets/kuliner.jpg';
import people from '../assets/people.png';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === aboutRef.current && entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (aboutRef.current) observer.observe(aboutRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section 
            ref={aboutRef}
            className="about" 
            id="about"
        >
            <div className="about-container">
                <div className="section-title">
                    <h2>About Kolaborasa</h2>
                </div>
                
                <div className="about-content">
                    <div className={`about-text ${isVisible ? 'animate-in' : ''}`}>
                        <p>
                            Kolaborasa is a creative movement by AFCO Project that focuses on empowering local F&B businesses through collaborative and viral events. We create unique culinary experiences that bring together food enthusiasts, families, and communities.
                        </p>
                        <p>
                            Our mission is to create unforgettable food festivals and events that not only promote local culinary talent but also create vibrant community spaces where people can connect through their love of food.
                        </p>
                        <p>
                            With successful events like BogorFest, Braga Ngabuburit Festival, and our upcoming Jajanan Viral series, we've established ourselves as pioneers in the culinary event industry across Indonesia.
                        </p>
                    </div>
                    
                    <div className={`about-visual ${isVisible ? 'animate-in' : ''}`}>
                        <div className="decorative-elements">
                            <div className="circle circle-1"></div>
                            <div className="circle circle-2"></div>
                            <div className="circle circle-3"></div>
                        </div>
                        
                        <div className="image-container">
                            <div className="main-image">
                                <img src={kuliner} alt="Food enthusiast enjoying meal" />
                            </div>
                            <div className="overlay-image">
                                <img src={people} alt="Kolaborasa culinary event" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}