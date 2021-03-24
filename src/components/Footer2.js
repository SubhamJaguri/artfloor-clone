import React from 'react'
import './Footer2.css'
import fbicon from '../images/fb-icon.png'

function Footer2() {
  return (
    <div className='main_footer_wrapper'>
      <div className='footer_menu_1'>
        <ul>
          <li>
            <a href='/'>About ArtFloor</a>
          </li>
          <li>
            <a href='/'>Press Review</a>
          </li>
          <li>
            <a href='/'>Contact Us</a>
          </li>
          <li>
            <a href='/'>Terms & Conditions</a>
          </li>
        </ul>
        <div className='footer_submenu_1'>
          {/*  Track your order | Shipping costs & insurance | Payment methods | Cancelations, returns & refunds  */}
          <ul>
            <li>
              <a href='/'> Track your order</a>
            </li>
            <li>
              <a href='/'>Shipping costs & insurance</a>
            </li>
            <li>
              <a href='/'>Payment methods</a>
            </li>
            <li>
              <a href='/'>Cancelations, returns & refunds</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer_menu_2'>
        <nav className='social'>
          <span>Follow us:</span>
          <ul>
            <li>
              <a href='https://www.facebook.com/ArtFloor-134044109982750/timeline/'>
                <img src={fbicon} alt='Facebook Icon' />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <script language='JavaScript' type='text/javascript'>
                TrustLogo("https://www.artfloor.com/images/positivessl_trust_seal_sm_124x32.png",
                "CL1", "none");
              </script>

              <a href='https://www.instantssl.com/' id='comodoTL'>
                Essential SSL
              </a>
            </li>
          </ul>
        </nav>
        <div class='gg'>
          Design &amp; Development by{' '}
          <a
            href='http://www.greekgeeks.com/en/'
            alt='link'
            target='_blank'
            rel='noreferrer'
          >
            GreekGeeks S.A
          </a>
          <br />
          Copyright © 2020 ArtFloor. All rights Reserved
        </div>
      </div>
    </div>
  )
}

export default Footer2
