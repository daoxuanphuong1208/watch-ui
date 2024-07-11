import NextArrowSlide from '../NextArrowSlide';
import PrevArrowSlide from '../PrevArrowSlide';

const settingsSimpleSlider = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 800,
    nextArrow: <NextArrowSlide />,
    prevArrow: <PrevArrowSlide />,
};

const settingsMultipleItems = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
};

export { settingsSimpleSlider, settingsMultipleItems };
