import React from 'react';


import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="sub-headtext" style={{ marginBottom: '3rem' }}>Pronađite Nas</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans"> Obala 20, 6320 Portorož, Slovenia</p>
        <p className="p__cormorant" style={{ color: '#112007', marginTop:'2rem', fontSize:"20px"}}>Delovni čas</p>
        <p className="p__opensans">Pon - Ned: 11:00 am - 11:00 pm</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Posjetite Nas</button>
    </div>

    <div className="app__wrapper_img">
      <img style={{height:"520px"}} src="https://10619-2.s.cdn12.com/rests/small/w400/320_507944348.jpg" alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
