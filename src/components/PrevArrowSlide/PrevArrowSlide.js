import classNames from 'classnames/bind';

import styles from './PrevArrowSlide.module.scss';
import images from '../../assets/images';

const cx = classNames.bind(styles);

function PrevArrowSlide({ passProps, onClick }) {
    return (
        <div onClick={onClick} className={cx('wrapper')} {...passProps}>
            <img src={images.arrowSlick} alt="prev" />
        </div>
    );
}

export default PrevArrowSlide;
