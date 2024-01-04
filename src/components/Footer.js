import React from 'react';
import { socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <footer className="section footer">
        <PageLinks parentClass='footer-links' itemClass='footer-link' />
        
        <ul className="footer-icons">
          {socialLinks.map((social) => {
            // const { id, href, icon } = social;
            return (
              <SocialLink key={social.id} itemClass='footer-icon' {...social} />
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
    </footer>
  )
}

export default Footer
