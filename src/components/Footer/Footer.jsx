import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">

    <div className="app__footer-links">

      <div className="app__footer-links_contact flex__center">
        <h1 className="app__footer-headtext">Kontakt </h1>
        <p className="p__opensans"> Obala 20, 6320 Portorož, Slovenia</p>
        <p className="p__opensans">+000 000 000</p>
        <p className="p__opensans">+000 000 000</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.naziv} alt="footer_logo" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work flex__center">
        <h1 className="app__footer-headtext">Delovni čas</h1>
        <p className="p__opensans">Ponedeljak-Nedelja:</p>
        <p className="p__opensans">11:00  - 23:00 </p>
      </div>

    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Stara Oljka. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
