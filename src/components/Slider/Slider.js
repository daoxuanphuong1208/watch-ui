import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';

import images from '../../assets/images';
import styles from './Slider.module.scss';
import NextArrowSlide from '../NextArrowSlide';
import PrevArrowSlide from '../PrevArrowSlide';

const cx = classNames.bind(styles);

function SimpleSlider() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 800,
        nextArrow: <NextArrowSlide />,
        prevArrow: <PrevArrowSlide />,
    };
    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>
                <img className={cx('slide-item')} src={images.slider_1} alt="slide" />
                <img className={cx('slide-item')} src={images.slider_2} alt="slide" />
                <img className={cx('slide-item')} src={images.slider_3} alt="slide" />
                <img className={cx('slide-item')} src={images.slider_4} alt="slide" />
            </Slider>
        </div>
    );
}

export default SimpleSlider;
