import React from 'react';
import Image from 'next/image';

const dummyData = Array.from({ length: 12 }, (_, idx) => `${idx + 1}`);

const Grid: React.FC = () => {
    return (
        <div className='gallery__grid'>
            {dummyData.map((path) => (
                <div
                    className='gallery__grid-item'
                    key={path}
                    style={{ gridArea: `g${path}` }}
                >
                    <Image
                        src={`/images/grid-${path}.png`}
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
