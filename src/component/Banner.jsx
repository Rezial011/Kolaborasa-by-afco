import React from "react";
import logo from '../assets/logo (1).png'

export default function Banner() {
    return (
        <section>
            <img src={logo} alt="" />
        </section>
    )
}

// ini namanya komponen
// nama komponen harus diawali huruf kapital
// usahain nama komponen sama kayak nama file (misal Banner.jsx, berarti yang disini function Banner())
// note : didalem return() isinya kayak html biasa aja