import React from 'react'
import './NavigationLinks.css'

function NavigationLinks() {
  return (
    <div className='art_navigation_links'>
      {/* 

    ARTISTS
    ARTWORKS
    LATEST ADDITIONS
    LIMITED EDITION
    NEWS
    CORPORATE PROJECTS

 */}
      <a href='/' className='link_item active'>
        ARTISTS
      </a>
      <a href='/' className='link_item'>
        ARTWORKS
      </a>
      <a href='/' className='link_item'>
        LATEST ADDITIONS
      </a>
      <a href='/' className='link_item'>
        LIMITED EDITION
      </a>
      <a href='/' className='link_item'>
        NEWS
      </a>
      <a href='/' className='link_item'>
        CORPORATE PROJECTS
      </a>
    </div>
  )
}

export default NavigationLinks
