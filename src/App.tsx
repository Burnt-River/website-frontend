import { Routes, Route } from 'react-router-dom'

import PageLayout from './components/PageLayout'

import './index.css'

import Home from './views/Home'
import About from './views/About'
import Gallery from './views/Gallery'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Routes>
  )
}

export default App
