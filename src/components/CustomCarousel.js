import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../images/art_carousel1.jpg'
import image2 from '../images/art_carousel2.jpg'
import image3 from '../images/art_carousel3.jpg'
import image4 from '../images/art_carousel4.jpg'
import image5 from '../images/art_carousel5.jpg'
import CustomCard from './CustomCard'
import './CustomCarousel.css'

function CustomCarousel() {
  const carouselItems = [
    {
      id: 1,
      source: image1,
      captionsText: {
        title: 'German',
        subtitle: 'Artist',
      },
    },
    {
      id: 2,
      source: image2,
      captionsText: {
        title: 'WILLIAM BEATS',
        subtitle: 'Clorospace Paintings',
      },
    },
    {
      id: 3,
      source: image3,
      captionsText: {
        title: 'Hedge',
        subtitle: 'Photographs',
      },
    },
    {
      id: 4,
      source: image4,
      captionsText: {
        title: 'Zofia Lipecka',
        subtitle: 'Paintings',
      },
    },
    {
      id: 5,
      source: image5,
      captionsText: {
        title: 'Contampery & Modern',
        subtitle: 'Art Dealers',
      },
    },
  ]

  return (
    <div>
      <Carousel interval={1000} controls={false} indicators={false}>
        {carouselItems.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <div className='carousel_item_wrapper'>
                <img
                  className='d-block w-100 h-100 '
                  src={item.source}
                  alt={'Slide' + item.captionsText}
                />
                <CustomCard caption={item.captionsText} />
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default CustomCarousel
