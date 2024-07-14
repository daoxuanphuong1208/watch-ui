import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faBasketShopping,
    faAngleDown,
    faSpinner,
    faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '../../assets/images';
import Button from '../../components/Button/Button';
import config from '../../config';

const cx = classNames.bind(styles);

function Header() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isSubNavVisible, setIsSubNavVisible] = useState(false);
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
                    <ul className={cx('action')}>
                        {/* Interactive tippy element may not be accessible via keyboard navigation because it is not directly after the reference element in the DOM source order. 
                        Use a wrapper <span> tag around the reference element solves this by creating a new parentNode context.*/}
                        <span>
                            <Tippy
                                visible={true}
                                interactive={true}
                                delay={[0, 2000]}
                                offset={[-135, -45]}
                                onShow={() => setIsSearchVisible(true)}
                                onHide={() => setIsSearchVisible(false)}
                                render={(attrs) => (
                                    <div className="box" tabIndex="-1" {...attrs}>
                                        <div className={cx('search')}>
                                            <div className={cx('search-wrap')}>
                                                <input
                                                    className={cx('search-input')}
                                                    type="text"
                                                    placeholder="Tìm kiếm..."
                                                />
                                                {/* <Button>
                                                    <FontAwesomeIcon icon={faSpinner} />
                                                </Button> */}
                                                <Button
                                                    className={cx('loading')}
                                                    leftIcon={<FontAwesomeIcon icon={faCircleXmark} />}
                                                ></Button>
                                                <Button
                                                    href="https://facebook.com"
                                                    className={cx('search-btn')}
                                                    leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                                                ></Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            >
                                <li>
                                    <Button
                                        className={cx('action-item', { 'hover-action-item': isSearchVisible })}
                                        to="#"
                                        leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                                    >
                                        Tìm kiếm
                                    </Button>
                                </li>
                            </Tippy>
                        </span>
                        <li>
                            <Button
                                className={cx('action-item')}
                                to={config.routes.cart}
                                leftIcon={<FontAwesomeIcon icon={faBasketShopping} />}
                            >
                                Giỏ hàng
                                <span className={cx('cart-total')}>( 6 )</span>
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className={cx('inner-bottom')}>
                    <ul className={cx('nav-list')}>
                        <li>
                            <Button className={cx('nav-item')} to={config.routes.home}>
                                Trang chủ
                            </Button>
                        </li>
                        {/* Interactive tippy element may not be accessible via keyboard navigation because it is not directly after the reference element in the DOM source order. 
                        Use a wrapper <span> tag around the reference element solves this by creating a new parentNode context.*/}
                        <span>
                            <Tippy
                                interactive={true}
                                delay={[0, 2000]}
                                offset={[40, -1]}
                                onShow={() => setIsSubNavVisible(true)}
                                onHide={() => setIsSubNavVisible(false)}
                                render={(attrs) => (
                                    <div className="box" tabIndex="-1" {...attrs}>
                                        <div className={cx('sub-nav')}>
                                            <Button href="https://facebook.com" className={cx('sub-nav-item')}>
                                                Xiaomi Watch
                                            </Button>
                                            <Button href="https://facebook.com" className={cx('sub-nav-item')}>
                                                Apple Watch
                                            </Button>
                                            <Button href="https://facebook.com" className={cx('sub-nav-item')}>
                                                Casio Watch
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            >
                                <li>
                                    <Button
                                        to="/product"
                                        className={cx('nav-item', { 'hover-nav-item': isSubNavVisible })}
                                        rightIcon={<FontAwesomeIcon icon={faAngleDown} />}
                                    >
                                        Sản phẩm
                                    </Button>
                                </li>
                            </Tippy>
                        </span>
                        <li>
                            <Button className={cx('nav-item')} to={config.routes.news}>
                                Tin tức
                            </Button>
                        </li>
                        <li>
                            <Button className={cx('nav-item')} to={config.routes.contact}>
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
