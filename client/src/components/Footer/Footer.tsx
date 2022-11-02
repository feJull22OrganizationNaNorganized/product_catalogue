import React from 'react';
import './Footer.scss';


export function Footer () {
  return (
    <div className='footer'>
      <div className="footer__container">
        <div className="images">
          <div className='nice_gadgets'>
            <img
              className='nice'
              src={require('../../images/Nice_Gadgets.png')}
              alt="footerLogo"
            />
          </div>
          <div className='img_hand'>
            <img
              className='hand'
              src={require('../../images/imageHand.png')}
              alt="hand_ok"
            />
          </div>
        </div>
        <div className='contacts'>
          <div className='contacts__info'>Github</div>
          <div className='contacts__info'>Contacts</div>
          <div className='contacts__info'>Rights</div>
        </div>
        <div className='to_top'>
          <div className='top'>Back to top</div>
          <a href="#header">
            <div className='img_top'>
              <div className='container_circle'>
                <img
                  className='rectangle'
                  src={require('../../images/Rectangle.png')}
                  alt="rectangle"
                />
                <img
                  className='vector'
                  src={require('../../images/Vector.png')}
                  alt="vector"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}