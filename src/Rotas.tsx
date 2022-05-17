import React from "react"
import { Routes, Route } from "react-router-dom"
import Sobre from "./Sobre"
import Home from "./Home"
import Notfound from "./Notfound"
const Rotas = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </>
    )
}

export default Rotas
