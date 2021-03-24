import React, { useState, useEffect } from 'react'
import Logo from '../images/artfloor.png'
import './SearchHeader.css'
import SearchIcon from '@material-ui/icons/Search'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import CloseIcon from '@material-ui/icons/Close'

function SearchHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <div className='art_header'>
      <div className='art_logo'>
        <a href='/en/'>
          <img src={Logo} alt='Modern &amp; Contemporary Fine Art Gallery' />
        </a>
        <div className='art_moto'>
          International <em>Art Dealers</em>
          <br />
          &amp;
          <em> Art Consultants</em>
        </div>
        <div className='bar_icon' onClick={handleDrawer}>
          <MenuOutlinedIcon className='menu_bar_Icon' />
          <div
            className={
              drawerOpen ? 'drawer_list_items open' : 'drawer_list_items '
            }
          >
            <CloseIcon
              onClick={() => {
                setDrawerOpen(false)
              }}
            />
            <ul className='drawer_list'>
              <li>
                <a href='/' className='link_item active'>
                  ARTISTS
                </a>
              </li>
              <li>
                <a href='/' className='link_item'>
                  ARTWORKS
                </a>
              </li>
              <li>
                <a href='/' className='link_item'>
                  LATEST ADDITIONS
                </a>
              </li>
              <li>
                <a href='/' className='link_item'>
                  LIMITED EDITION
                </a>
              </li>
              <li>
                <a href='/' className='link_item'>
                  NEWS
                </a>
              </li>
              <li>
                <a href='/' className='link_item'>
                  CORPORATE PROJECTS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='art_top-search top-search-open'>
        <form method='get' action='/en/search/'>
          <input
            type='search'
            className='art_search search_cmp'
            id='q'
            name='q'
            placeholder='Search'
            autoComplete='off'
          />
          <button id='searchbtn' className='btn-search icon-search'>
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchHeader
