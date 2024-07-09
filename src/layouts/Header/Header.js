import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBasketShopping, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '../../assets/images';
import Button from '../../components/Button/Button';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-top')}>
                    <span>
                        Hotline
                        <Button className={cx('phone')}>09XXXXXX68</Button>
                    </span>
                    <Button>
                        <img className={cx('inner-top')} src={images.logo} alt="logo" />
                    </Button>
                    <span className={cx('action')}>
                        <Button className={cx('action-item')} leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                            Tìm kiếm
                        </Button>
                        <Button
                            to="/cart"
                            className={cx('action-item')}
                            leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                        >
                            Gio hang
                        </Button>
                    </span>
                </div>
                <div className={cx('inner-bottom')}></div>
            </div>
        </header>
    );
}

export default Header;
