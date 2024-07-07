import classNames from 'classnames/bind';

import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-top')}>
                    <div className={cx('hotline')}>
                        Hotline <span className={cx('phone')}>09XXXXXX</span>
                    </div>
                    <img className={cx('logo')} src="" alt="" />
                    <div className={cx('action-list')}>
                        <div className={cx('action-item')}>Tìm kiếm</div>
                        <div className={cx('action-item')}>Giỏ hàng</div>
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
