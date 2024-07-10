import classNames from 'classnames/bind';
import styles from './Home.module.scss';

// eslint-disable-next-line no-unused-vars
import images from '../../assets/images';
import SimpleSlider from '../../components/Slider/Slider';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <SimpleSlider />
        </div>
    );
}

export default Home;
