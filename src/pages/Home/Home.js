import classNames from 'classnames/bind';
import styles from './Home.module.scss';

// eslint-disable-next-line no-unused-vars
import images from '../../assets/images';
import Slide from '../../components/Slide';
import ContentItem from '../../components/ContentItem';
import * as settings from '../../components/Slide/settingsSlider';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Slide images={images.banner} settings={settings.settingsSimpleSlider} width="100%" height="475px" />
            <ContentItem
                title="Đối tác"
                description="Bộ sưu tập những thương hiệu nổi tiếng về smartwatch trên thế giới"
            >
                <Slide
                    title="multiple"
                    className={cx('slide-item-multiple')}
                    images={images.partner}
                    settings={settings.settingsMultipleItems}
                    width="165px"
                    height="50px"
                />
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
