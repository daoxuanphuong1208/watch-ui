import classNames from 'classnames/bind';

import Button from '../Button';
import images from '../../assets/images';
import styles from './ProductMini.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);

function ProductMini({}) {
    const classes = cx('wrapper');
    const activeItemCategory = useState(true);
    return (
        <Button>
            <div className={classes}>
                <img src={images.productMini[0].url} alt="Sản phẩm" />
                <span
                    className={cx('title', {
                        ['active']: activeItemCategory,
                    })}
                >
                    Apple Watch
                </span>
            </div>
        </Button>
    );
}

export default ProductMini;
