import React from 'react';


import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">

    <div className="app__wrapper_info">
      <h1 className="app__header-h1">Okusite zgodbo</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro corporis beatae expedita earum, doloribus sequi optio nisi neque, tenetur incidunt itaque necessitatibus aliquam voluptatibus assumenda obcaecati exercitationem maiores id! Repellat? </p>
      <button type="button" className="custom__button">Naš Meni</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
