import React from "react";
import logo from "../../public/logo-round.png"
const companies = [
    {
        id: 1,
        logo: "",
        name: "",
    },
    {
        id: 2,
        logo: "",
        name: "",
    },
    {
        id: 3,
        logo: "",
        name: "",
    },
    {
        id: 4,
        logo: "",
        name: "",
    },
    {
        id: 5,
        logo: "",
        name: "",
    },
    {
        id: 6,
        logo: "",
        name: "",
    },
    {
        id: 7,
        logo: "",
        name: "",
    },
    {
        id: 8,
        logo: "",
        name: "",
    },
]

export default function Partner() {
    return (
        <section className=" pb-19">
            <div className="partner flex gap-3 items-center justify-center text-center mb-10 md:mb-15" data-aos="fade-down">
                <hr className="h-[4px] w-14 sm:w-19 rounded-full border-hidden" style={{background: "linear-gradient(90deg, #fab12f 0%, #faa22f 100%)"}}/>
                <h1 className="font-semibold text-3xl sm:text-4xl ">Our Partner</h1>
            </div>
            <div className="flex flex-wrap gap-7 sm:gap-13 md:gap-19 justify-center px-3 sm:px-10" data-aos="fade-up">
            {
                companies.map((company) => (
                    <div key={company.id} className="flex flex-col items-center">
                        <img src={logo} className="h-20 sm:h-25 md:h-30" alt="" />
                        {/* <h1 className="text-md text-[#333333] mt-5">Company name</h1> */}
                    </div>
                ))
            }
            </div>
        </section>
    )
}