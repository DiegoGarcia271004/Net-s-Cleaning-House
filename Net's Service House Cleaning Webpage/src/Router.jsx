import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import { NotFound } from './components/NotFound/NotFound'

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            {/*<Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />*/}

            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
    
}