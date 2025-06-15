import React from "react";
import logo from '../assets/logo (1).png'
import video from '../assets/video-banner.mp4'

export default function Banner() {
    return (
        <section>
            <nav class="navbar">
        <div class="logo">
            <img className="h-15" src={logo} alt="Kolaborasa Logo"/>
            
        </div>
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#success">Success Stories</a></li>
            <li><a href="#upcoming">Upcoming</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
            <section class="hero" id="home">
                <div class="hero-content">
                    <div className="absolute w-full h-full bg-black opacity-70 flex flex-col justify-center items-center">
                        <h1 className="animate ">Kolaborasa</h1>
                        <p className="animate animate-delay-1">Bringing culinary experiences to life through collaborative events</p>
                        <a href="#upcoming" className="cta-btn animate animate-delay-2">Discover Our Events</a>
                    </div>
                    <video className="w-screen relative -z-10" autoPlay loop muted>
                        <source src={video} />
                    </video>
                </div>
            </section>
            
        </section>
    )
}

// ini namanya komponen
// nama komponen harus diawali huruf kapital
// usahain nama komponen sama kayak nama file (misal Banner.jsx, berarti yang disini function Banner())
// note : didalem return() isinya kayak html biasa aja