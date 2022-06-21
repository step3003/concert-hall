// @ts-nocheck
import React from 'react';
import Image from 'next/image';
import LinkIcon from '../../public/icons/link.svg';

export const Post = () => {
    function handleClipboard() {
        const path = process.env.HOST + asPath;
        navigator.clipboard.writeText(path);
    }

    return (
        <div className='post'>
            {/* <div className='post__wrapper'> */}
            {/*     <div className='post__container container'> */}
            {/*         <p className='post__date-time'> */}
            {/*             {date} | {time} */}
            {/*         </p> */}
            {/*         <div className='post__header'> */}
            {/*             <h3 className='post__title'>{title}</h3> */}
            {/*             <button */}
            {/*                 className='post__clipboard-btn' */}
            {/*                 onClick={handleClipboard} */}
            {/*             > */}
            {/*                 <span className='sr-only'> */}
            {/*                     Скопировать ссылку на пост */}
            {/*                 </span> */}
            {/*                 <LinkIcon onClick={handleClipboard} /> */}
            {/*             </button> */}
            {/*         </div> */}
            {/*         <div className='post__img'> */}
            {/*             <Image */}
            {/*                 src={imgSrc} */}
            {/*                 objectFit='cover' */}
            {/*                 layout='responsive' */}
            {/*                 width={100} */}
            {/*                 height={50} */}
            {/*                 quality={100} */}
            {/*             /> */}
            {/*         </div> */}
            {/*         <p className='post__desc'>{desc}</p> */}
            {/*     </div> */}
            {/* </div> */}
            Post
        </div>
    );
};

export default Post;
