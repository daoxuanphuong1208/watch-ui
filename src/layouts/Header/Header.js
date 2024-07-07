import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '../../assets/images';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-top')}>
                    <div className={cx('hotline')}>
                        Hotline <span className={cx('phone')}>0375802813</span>
                    </div>
                    <img width="145" height="75" className={cx('logo')} src={images.logo} alt="logo" />
                    <div className={cx('action-list')}>
                        <div className={cx('action-item')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </span>
                            Tìm kiếm
                            <div className={cx('search')}>
                                <input type="text" placeholder="Tìm sản phẩm..." />
                                <button>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </div>
                        <div className={cx('action-item')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </span>
                            Giỏ hàng
                        </div>
                    </div>
                </div>
                {/* <ul className={cx('menu-list')}>
                    <li className={cx('menu-item')}>TRANG CHỦ</li>
                    <li className={cx('menu-item')}>SẢN PHẨM</li>
                    <li className={cx('menu-item')}>TIN TỨC</li>
                    <li className={cx('menu-item')}>LIÊN HỆ</li>
                </ul> */}
            </div>
        </header>
    );
}

export default Header;
