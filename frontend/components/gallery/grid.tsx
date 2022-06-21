import React from 'react';
import Image from 'next/image';
import { grid } from '../../shared/dummyData';

const Grid: React.FC = () => {
    return (
        <div className='gallery__grid'>
            {grid.map((path) => (
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
