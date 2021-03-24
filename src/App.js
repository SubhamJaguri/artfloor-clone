import React, { useState } from 'react'
import TopHeader from './components/TopHeader'
import SearchHeader from './components/SearchHeader'
import NavigationLinks from './components/NavigationLinks'
import CustomCarousel from './components/CustomCarousel'

import 'bootstrap/dist/css/bootstrap.min.css'
import ImageGallery from './components/ImageGallery'
import ExtraLinks from './components/ExtraLinks'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'

function App() {
  const [isMobile, setIsmobile] = useState(true)

  return (
    <div className='app_root'>
      <div className='navbar_wrapper'>
        <TopHeader />
      </div>
      <div className='App'>
        <SearchHeader />
        <NavigationLinks />
        <div className='image_carousel_wrapper'>
          <CustomCarousel />
        </div>
        <ImageGallery />
        <ExtraLinks />
        <Footer />
      </div>
      <div className='main_footer_outer_wrapper'>
        <Footer2 />
      </div>
    </div>
  )
}

export default App
