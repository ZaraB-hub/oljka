import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

      <div className="app__wrapper_img  about__img">
        <img src="https://media.istockphoto.com/id/951132442/photo/mastering-new-culinary-heights.jpg?s=612x612&w=0&k=20&c=96kg8oMcQ1VlItWhwRI69aAO_CWiZjHvNuvNYPiE59M=" alt="finus_img" />
      </div>

      <div className="app__aboutus-content_about">
        <h1 className="sub-headtext">O Nama</h1>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom__button">Saznajte Više</button>
      </div>

    
  </div>
);

export default AboutUs;
