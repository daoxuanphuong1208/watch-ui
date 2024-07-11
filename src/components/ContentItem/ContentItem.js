import classNames from 'classnames/bind';

import style from './ContentItem.module.scss';

const cx = classNames.bind(style);
function ContentItem({ children, title, description }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                    <h2 className={cx('large')}>{title}</h2>
                    <p className={cx('description')}>{description}</p>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}

export default ContentItem;
