import classNames from 'classnames/bind';

import style from './ContentItem.module.scss';

const cx = classNames.bind(style);
function ContentItem() {
    return <div className={cx('wrapper')}></div>;
}

export default ContentItem;
