import classNames from 'classnames/bind';
import styles from './Home.module.scss';

// eslint-disable-next-line no-unused-vars
import images from '../../assets/images';
import SimpleSlider from '../../components/Slider/Slider';
import ContentItem from '../../components/ContentItem/ContentItem';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <SimpleSlider />
            <ContentItem />
        </div>
    );
}

export default Home;
