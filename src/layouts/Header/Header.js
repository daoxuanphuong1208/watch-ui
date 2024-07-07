import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '../../assets/images';
const cx = classNames.bind(styles);

function Header() {
    return <header className={cx('wrapper')}></header>;
}

export default Header;
