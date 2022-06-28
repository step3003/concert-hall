// @ts-nocheck
import type { NextPage } from 'next';
import Link from 'next/link';
import Filter from '../../public/icons/filter.svg';
import Image from 'next/image';
import Hint from '../../components/hint';
import { posts } from '../../shared/dummyData';

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
                        {posts.map(
                            ({ date, time, title, desc, imgSrc, slug }) => (
                                <div className='blog__post' key={title}>
                                    <div className='blog__post-img'>
                                        <Image
                                            src={imgSrc}
                                            layout='responsive'
                                            width={100}
                                            height={70}
                                            quality={100}
                                            objectFit='cover'
                                            alt='Блог'
                                        />
                                        <Link
                                            href={{
                                                pathname: `/blog/[slug]`,
                                                query: {
                                                    slug,
                                                },
                                            }}
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
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
