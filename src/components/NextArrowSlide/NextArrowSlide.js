import classNames from 'classnames/bind';

import styles from './NextArrowSlide.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function NextArrowSlide({ passProps, onClick }) {
    return (
        <div onClick={onClick} className={cx('wrapper')} {...passProps}>
            <FontAwesomeIcon icon={faAngleRight} />
        </div>
    );
}

export default NextArrowSlide;
