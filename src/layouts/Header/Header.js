import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBasketShopping, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '../../assets/images';
import Button from '../../components/Button/Button';
import config from '../../config';

const cx = classNames.bind(styles);

function Header() {
    const handleSubNavItemClick = (e) => {
        e.stopPropagation();
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-top')}>
                    <span>
                        Hotline
                        <Button className={cx('phone')} href="tel:09xxxxxxxx">
                            09xxxxxxxx
                        </Button>
                    </span>
                    <Button to={config.routes.home}>
                        <img className={cx('logo')} src={images.logo} alt="logo" />
                    </Button>
                    <span className={cx('action')}>
                        <Button
                            to="#"
                            className={cx('action-item')}
                            leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                        >
                            Tìm kiếm
                            <div className={cx('search')}>
                                <div className={cx('search-wrap')}>
                                    <input className={cx('search-input')} type="text" placeholder="Tìm kiếm..." />
                                    <Button
                                        href="https://facebook.com"
                                        className={cx('search-btn')}
                                        leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                                    ></Button>
                                </div>
                            </div>
                        </Button>
                        <Button
                            to={config.routes.cart}
                            className={cx('action-item')}
                            leftIcon={<FontAwesomeIcon icon={faBasketShopping} />}
                        >
                            Giỏ hàng
                            <span className={cx('cart-total')}>( 6 )</span>
                        </Button>
                    </span>
                </div>
                <div className={cx('inner-bottom')}>
                    <nav className={cx('nav-list')}>
                        <Button className={cx('nav-item')} to={config.routes.home}>
                            Trang chủ
                        </Button>
                        <Button
                            to="/product"
                            className={cx('nav-item')}
                            rightIcon={<FontAwesomeIcon icon={faAngleDown} />}
                        >
                            Sản phẩm
                            <div className={cx('sub-nav')}>
                                <Button
                                    onClick={handleSubNavItemClick}
                                    href="https://facebook.com"
                                    className={cx('sub-nav-item')}
                                >
                                    Xiaomi Watch
                                </Button>
                                <Button
                                    onClick={handleSubNavItemClick}
                                    href="https://facebook.com"
                                    className={cx('sub-nav-item')}
                                >
                                    Apple Watch
                                </Button>
                                <Button
                                    onClick={handleSubNavItemClick}
                                    href="https://facebook.com"
                                    className={cx('sub-nav-item')}
                                >
                                    Casio Watch
                                </Button>
                            </div>
                        </Button>
                        <Button className={cx('nav-item')} to={config.routes.news}>
                            Tin tức
                        </Button>
                        <Button className={cx('nav-item')} to={config.routes.contact}>
                            Liên hệ
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
