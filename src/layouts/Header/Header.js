import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBasketShopping, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '../../assets/images';
import Button from '../../components/Button/Button';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('top')}>
                    <div>
                        <span>Hotline </span>
                        <Button className={cx('phone')} href="tel:09xxxxxxxx">
                            09xxxxxxxx
                        </Button>
                    </div>
                    <Button to="/" className={cx('logo')}>
                        <img width="145" height="75" src={images.logo} alt="logo" />
                    </Button>
                    <ul className={cx('action')}>
                        <li>
                            <Button
                                leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                                className={cx('action-item')}
                            >
                                Tìm kiếm
                            </Button>
                        </li>
                        <li>
                            <Button
                                leftIcon={<FontAwesomeIcon icon={faBasketShopping} />}
                                className={cx('action-item')}
                                to="/cart"
                            >
                                Giỏ hàng ( 12 )
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className={cx('bottom')}>
                    <ul className={cx('menu')}>
                        <li>
                            <Button className={cx('menu-item')} to="/">
                                Trang chủ
                            </Button>
                        </li>
                        <li>
                            <Button
                                rightIcon={<FontAwesomeIcon icon={faAngleDown} />}
                                className={cx('menu-item')}
                                to="/product"
                            >
                                Sản phẩm
                            </Button>
                        </li>
                        <li>
                            <Button className={cx('menu-item')} to="/news">
                                Tin tức
                            </Button>
                        </li>
                        <li>
                            <Button className={cx('menu-item')} to="/contact">
                                Liên hệ
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
