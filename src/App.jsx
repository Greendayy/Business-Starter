import Layout from './component/Layout'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Service from './pages/Service'
import Home from './pages/Home'
import NoPage from './component/NoPage'

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        {/* <Route path="/"> */}
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
