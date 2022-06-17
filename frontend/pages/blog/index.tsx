import type { NextPage } from 'next';
import Link from 'next/link';
import Filter from '../../public/icons/filter.svg';
import Image from 'next/image';
import Hint from '../../components/hint';

export const dummyData = [
    {
        date: '20/10/2222',
        time: '22:00',
        title: 'От Баха до джаза. Концерт для четырех саксофонов и органа',
        imgSrc: '/images/post-1.png',
        desc: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
    },
    {
        date: '20/10/2222',
        time: '22:00',
        title: 'От Баха до джаза. Концерт для четырех саксофонов и органа',
        imgSrc: '/images/post-2.png',
        desc: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
    },
    {
        date: '20/10/2222',
        time: '22:00',
        title: 'От Баха до джаза. Концерт для четырех саксофонов и органа',
        imgSrc: '/images/post-3.png',
        desc: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
    },
];

export const BlogPage: NextPage = () => {
    return (
        <div className='blog'>
            <div className='blog__wrapper'>
                <div className='container'>
                    <div className='blog__header'>
                        <h3 className='blog__title title'>Блог</h3>
                        <button className='blog__filter-btn'>
                            <span className='sr-only'>
                                Отсортировать по дате
                            </span>
                            <Hint text='Отсортировать по дате'>
                                <Filter />
                            </Hint>
                        </button>
                    </div>
                    <div className='blog__posts'>
                        {dummyData.map(({ date, time, title, imgSrc }, idx) => (
                            <div className='blog__post'>
                                <div className='blog__post-img'>
                                    <Image
                                        src={imgSrc}
                                        layout='responsive'
                                        width={100}
                                        height={70}
                                        quality={100}
                                        objectFit='cover'
                                    />
                                    <Link
                                        href={`/blog/${idx}`}
                                        className='blog__more'
                                        passHref
                                    >
                                        <a className='blog__more btn btn--outline-white'>
                                            Подробнее
                                        </a>
                                    </Link>
                                </div>
                                <h4 className='blog__post-title text-underline'>
                                    {title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
