import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '../../assets/images';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <img src={images.slider_1} alt="slider" />
        </div>
    );
}

export default Home;
