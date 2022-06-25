import React from 'react';
import Image from 'next/image';

type Props = {
    handleClickImage: (idx: number) => any;
    gallery: string[];
};

const Grid: React.FC<Props> = ({ handleClickImage, gallery }) => {
    return (
        <div className='gallery__grid'>
            {gallery.map((src, idx) => (
                <div
                    className='gallery__grid-item'
                    key={src}
                    style={{ gridArea: `g${idx + 1}` }}
                    onClick={handleClickImage(idx)}
                >
                    <Image
                        src={src}
                        width={100}
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
            ))}
        </div>
    );
};

export default Grid;
