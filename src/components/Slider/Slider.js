import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';

import images from '../../assets/images';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
    };
    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>
                <img width="100%" height="435px" src={images.slider_1} alt="slide" />
                <img width="100%" height="435px" src={images.slider_2} alt="slide" />
                <img width="100%" height="435px" src={images.slider_3} alt="slide" />
                <img width="100%" height="435px" src={images.slider_4} alt="slide" />
            </Slider>
        </div>
    );
}

export default SimpleSlider;
