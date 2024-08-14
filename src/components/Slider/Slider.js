import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';

import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function Slide({ settings, className, children }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <Slider {...settings} className={classes}>
            {children}
        </Slider>
    );
}

export default Slide;
