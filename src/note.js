import classNames from 'classnames/bind';

import styles from './ProductItem.module.scss';
const cx = classNames.bind(styles);

function ProductItem() {
    const classes = cx('wrapper');
    return <div className={classes}></div>;
}

export default ProductItem;
