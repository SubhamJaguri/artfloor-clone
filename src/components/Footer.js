import React from 'react'
import Divider from '@material-ui/core/Divider'
import './Footer.css'
import SearchIcon from '@material-ui/icons/Search'

function Footer() {
  return (
    <div
      style={{ margin: '2em 0', padding: '0.5rem auto', textAlign: 'center' }}
    >
      <div className='search_container'>
        <Divider />
        <div className='footer_search_content'>
          <h3>Subscribe to our Newsletter</h3>
          <div className='footer_search top-search-open'>
            <form method='get' action='/en/search/'>
              <input
                type='search'
                className='footer_search_input search_cmp'
                id='q'
                name='q'
                placeholder='Enter your email'
                autoComplete='off'
              />
              <button id='searchbtn' className='btn-search footer_search_btn'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  )
}

export default Footer
