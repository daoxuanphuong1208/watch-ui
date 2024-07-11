import classNames from 'classnames/bind';

import styles from './PrevArrowSlide.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PrevArrowSlide({ passProps, onClick }) {
    return (
        <div onClick={onClick} className={cx('wrapper')} {...passProps}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </div>
    );
}

export default PrevArrowSlide;
