import React from "react";

const stats = [
    {
        id: 1,
        num: '117K+',
        text: 'Visitiors at BogorFest'
    },
    {
        id: 2,
        num: '3.5B+',
        text: 'IDR Revenue Generated'
    },
    {
        id: 3,
        num: '15K+',
        text: 'Daily Visitors at Braga Festival'
    },
    {
        id: 4,
        num: '100+',
        text: 'Food Vendors Empowered'
    },
]

export default function SuccessStories() {
    return (
        <section className="SuccessStories flex flex-col justify-center items-center mb-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#333333] mb-5 ">Success Stories</h1>
            <hr className="w-43 sm:w-48 lg:w-60 h-[3px] rounded-full border-hidden mb-10"/>
            <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                stats.map((stat) => (
                    <div key={stat.id} className={`text-center m-7 ${stat.id === 4 ? 'md:col-start-2 md:col-end-2 lg:col-start-auto lg:col-end-auto' : ''}`}>
                        <h1 className="text-[42px] sm:text-5xl font-bold mb-1.5">{stat.num}</h1>
                        <h3 className="text-[1.05rem] md:text-lg text-gray-500">{stat.text}</h3>
                    </div>
                ))
            }
            </div>
        </section>
    )
}