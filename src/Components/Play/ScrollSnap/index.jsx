import React from 'react';
import img1 from '../../../assets/Artboard 1.jpg'
import img2 from '../../../assets/Artboard 2.png'
import img3 from '../../../assets/Artboard 3.png'
import img4 from '../../../assets/Artboard 4.png'
import img5 from '../../../assets/Artboard 5.png'
import img6 from '../../../assets/Artboard 6.png'
import img7 from '../../../assets/Artboard 7.png'
import img8 from '../../../assets/Artboard 8.png'
import img9 from '../../../assets/Artboard 9.png'
import screen from '../../../assets/template.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.css';

const images = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
];

const StageSlider = () => {
  const renderSlides = () => (
    images.map(({ id, src }) => (
      <div key={id} className="item">
        <img className="slide-bg" src={src} />
      </div>
    ))
  );

  return (
    <div className="stage-slider-wrapper">
      {/* <div className="slider-blur"></div> */}
      <div className="screen">
        <img src={screen} alt="" />
        <img src={screen} alt="" className='snap-img-2' />
      </div>
      <OwlCarousel
        className="owl-theme"
        center={true}
        items={4}
        margin={0}
        nav = {false}
        dots={false}
        mouseDrag={true}
        touchDrag={true}
        loop
        // autoplay
        autoplayTimeout={1000}
        autoplayHoverPause
      >
        {renderSlides()}
      </OwlCarousel>
      {/* <div className="slider-blur"></div> */}
    </div>
  );
};

export default StageSlider;
