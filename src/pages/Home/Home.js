import classNames from 'classnames/bind';
import styles from './Home.module.scss';

// eslint-disable-next-line no-unused-vars
import images from '../../assets/images';
import SimpleSlider from '../../components/SimpleSlider/SimpleSlider';
import MultipleItems from '../../components/MultipleItems/MultipleItems';
import ContentItem from '../../components/ContentItem/ContentItem';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <SimpleSlider />
            <ContentItem
                title="Đối tác"
                description="Bộ sưu tập những thương hiệu nổi tiếng về smartwatch trên thế giới"
            >
                <MultipleItems />
            </ContentItem>

            <ContentItem
                title="Sản phẩm mới"
                description="Những chiếc đồng hồ thể hiện đẳng cấp, thể thao dành cho phái mạnh"
            >
                <MultipleItems />
            </ContentItem>

            <ContentItem
                title="Sản phẩm bán chạy"
                description="Bộ sưu tập những thương hiệu nổi tiếng về smartwatch trên thế giới"
            >
                <MultipleItems />
            </ContentItem>
            <ContentItem
                title="Tin tức"
                description="Chúng tôi sẵn sàng cập nhật những kiến thức, công nghệ mới nhất dành cho các bạn"
            >
                <MultipleItems />
            </ContentItem>
        </div>
    );
}

export default Home;
