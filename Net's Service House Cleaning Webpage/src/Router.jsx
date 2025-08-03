import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            {/*<Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />*/}
        </Routes>
    )
    
}