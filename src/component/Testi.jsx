import React, { useState } from "react";
import logo from "../../public/logo-round.png"
const testimoni = [
    {
        id: 1,
        text: '',
        name: '',
        status: '',
        image: {},
    },
    {
        id: 2,
        text: '',
        name: '',
        status: '',
        image: {},
    },
    {
        id: 3,
        text: '',
        name: '',
        status: '',
        image: {},
    },
    {
        id: 4,
        text: '',
        name: '',
        status: '',
        image: {},
    },
    {
        id: 5,
        text: '',
        name: '',
        status: '',
        image: {},
    },
]

export default function Testi() {
    const [clicked, setClicked] = useState(false)
    const click = (id) => {
        setClicked(itemId => (itemId === id ? null : id));
    };
    return (
        <section className="testi-wrap overflow-scroll" style={{scrollbarColor:'transparent transparent'}}>
            <div className="flex w-max gap-8 px-10 md:px-0 py-5">
            {
                testimoni.map((testi) => (
                    <div key={testi.id} className={`testi w-[75vw] sm:w-[60vw] md:w-[38vw] lg:w-[32vw] xl:w-[22vw] p-6 md:p-8 bg-white text-gray-700 rounded-2xl ${clicked === testi.id ? 'h-max' : 'h-[100%]'}`}>
                        <p className={`italic mb-7 leading-6  ${clicked === testi.id ? 'line-clamp-none' : 'line-clamp-8'}`} onClick={() => click(testi.id)}>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit delectus minima porro, dignissimos veritatis nulla, quis voluptatibus eos debitis possimus et quia vitae quisquam incidunt sint repudiandae sunt! Consequuntur, assumenda!"</p>
                        <div className="flex items-center gap-5">
                            <img src={logo} className="w-13 h-13 rounded-full overflow-hidden" alt="" />
                            <div>
                                <h1 className="text-[#333333] font-semibold line-clamp-2">Lorem Ipsum</h1>
                                <h2 className="text-xs line-clamp-1">Lorem Ipsum</h2>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </section>
    )
}