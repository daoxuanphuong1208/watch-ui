import classNames from 'classnames/bind';
import styles from './Home.module.scss';

// eslint-disable-next-line no-unused-vars
import images from '../../assets/images';
import { default as Slider } from '../../components/Slider';
import ContentItem from '../../components/ContentItem';
import * as settings from '../../components/Slider/settingsSlider';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Slider settings={settings.settingsSimpleSlider}>
                {images.banner.map((item, index) => {
                    return (
                        <div key={index}>
                            <img className={cx('banner-item')} src={item.url} alt={item.title} />
                        </div>
                    );
                })}
            </Slider>
            <ContentItem
                title="Đối tác"
                description="Bộ sưu tập những thương hiệu nổi tiếng về smartwatch trên thế giới"
            >
                <Slider settings={settings.settingsMultipleItems}>
                    {images.partner.map((item, index) => {
                        return (
                            <div key={index}>
                                <img className={cx('partner-item')} src={item.url} alt={item.title} />
                            </div>
                        );
                    })}
                </Slider>
            </ContentItem>

            <ContentItem
                title="Sản phẩm mới"
                description="Những chiếc đồng hồ thể hiện đẳng cấp, thể thao dành cho phái mạnh"
            ></ContentItem>

            <ContentItem
                title="Sản phẩm bán chạy"
                description="Bộ sưu tập những thương hiệu nổi tiếng về smartwatch trên thế giới"
            ></ContentItem>
            <ContentItem
                title="Tin tức"
                description="Chúng tôi sẵn sàng cập nhật những kiến thức, công nghệ mới nhất dành cho các bạn"
            ></ContentItem>
        </div>
    );
}

export default Home;
