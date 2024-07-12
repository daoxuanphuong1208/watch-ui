import classNames from 'classnames/bind';

import styles from './NextArrowSlide.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import images from '../../assets/images';

const cx = classNames.bind(styles);

function NextArrowSlide({ passProps, onClick }) {
    return (
        <div onClick={onClick} className={cx('wrapper')} {...passProps}>
            <img src={images.arrowSlick} alt="next" />
        </div>
    );
}

export default NextArrowSlide;
