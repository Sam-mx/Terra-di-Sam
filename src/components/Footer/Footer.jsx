import React from 'react';
import { footerLinks, socialMedia } from "../../constants";
import { copyrightSign } from "../../assets/icons";
import './Footer.css';

const Footer = () => {
  return (
      <footer className='footer-container'>
        <div className='footer'>
          <div className='footer-section'>
           <a href='#' className='h2'>Terrace</a>
          <p className='footer-description'>
          Enjoy Italian wines, appetisers, and pasta recipes on our terrace.
          </p>
          <div className='footer-social-media'>
          {socialMedia.map((icon) => (
            <div className='footer-social-icon' key={icon.alt}>
              <img src={icon.src} alt={icon.alt} width={24} height={24} />
            </div>
          ))}
          </div>
        </div>

      <div className='footer-section footer-links'>
        {footerLinks.map((section) => (
          <div key={section.title} className='footer-link-section'>
            <h4 className='footer-section-title'>{section.title}</h4>
            <ul>
              {section.links.map((link) => (
                <li key={link.name} className='footer-link'>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='footer-bottom'>
      <div className='copyright'>
        <img src={copyrightSign} alt='copyright sign' width={20} height={20} />
        <p>2024. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
