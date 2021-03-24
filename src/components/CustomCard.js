import React from 'react'

function CustomCard({ caption }) {
  console.log(caption)
  return (
    <div className='caption_box'>
      <div className='top_right'></div>
      <h4>{caption.title}</h4>
      <h4>{caption.subtitle}</h4>
      <div className='bottom_left'></div>
    </div>
  )
}

export default CustomCard
