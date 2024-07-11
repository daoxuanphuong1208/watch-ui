import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';

import styles from './Slide.module.scss';

const cx = classNames.bind(styles);

function Slide({ settings, width, height, className, images, title }) {
    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>
                {images.map((item, index) => {
                    if (title && title === 'multiple') {
                        return (
                            <div key={index}>
                                <div className={cx('item-multiple')}>
                                    <img
                                        width={width}
                                        height={height}
                                        className={className}
                                        src={item.url}
                                        alt="slide"
                                    />
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={index}>
                                <img width={width} height={height} className={className} src={item.url} alt="slide" />
                            </div>
                        );
                    }
                })}
            </Slider>
        </div>
    );
}

export default Slide;
