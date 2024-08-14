import styles from './Category.module.scss';

import ProductMini from '../ProductMini';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Category() {
    const classes = cx('wrapper');
    return (
        <div className={classes}>
            <div className={cx('product-mini')}>
                <ProductMini />
                <ProductMini />
            </div>
        </div>
    );
}

export default Category;
