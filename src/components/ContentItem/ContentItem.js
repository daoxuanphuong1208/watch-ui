import classNames from 'classnames/bind';

import style from './ContentItem.module.scss';

const cx = classNames.bind(style);
function ContentItem({ content }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                    <h2 className={cx('large')}>Đối tác</h2>
                    <p className={cx('description')}>
                        Bộ sưu tập những thương hiệu nổi tiếng về smartwatch trên thế giới
                    </p>
                </div>
                <div>{content}</div>
            </div>
        </div>
    );
}

export default ContentItem;
