import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './HeaderOnly.module.scss';
import Header from '../Header';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
