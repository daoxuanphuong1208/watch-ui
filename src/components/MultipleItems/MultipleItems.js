import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';

import images from '../../assets/images';
import styles from './MultipleItems.module.scss';

const cx = classNames.bind(styles);

function SimpleSlider() {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
    };
    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>
                {images.partner.map((partner, index) => {
                    return (
                        <div key={index} className={cx('slide-item')}>
                            <div className={cx('brand')}>
                                <img src={partner.url} alt="partner" />
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default SimpleSlider;
