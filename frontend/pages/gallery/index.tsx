import type { NextPage } from 'next';
import Grid from '../../components/gallery/grid';

export const GalleryPage: NextPage = () => {
    return (
        <div className='gallery'>
            <div className='gallery__wrapper'>
                <h3 className='gallery__title title'>Галерея</h3>
                <Grid />
                <Grid />
            </div>
        </div>
    );
};

export default GalleryPage;
