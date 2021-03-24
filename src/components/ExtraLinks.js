import React from 'react'
import Button from '@material-ui/core/Button'

import './Extralinks.css'

const ExtraLinks = () => {
  return (
    <div className='extralLinks_wrapper'>
      <Button className='btn' variant='text'>
        Art Consultants & Art Dealers
      </Button>
      <Button className='btn' variant='text'>
        In the Press
      </Button>
      <Button className='btn' variant='text'>
        Corporate Projects
      </Button>
    </div>
  )
}

export default ExtraLinks
