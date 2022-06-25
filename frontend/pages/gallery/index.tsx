import { useState } from 'react';
import type { NextPage } from 'next';
import Grid from '../../components/gallery/grid';
import Viewer from '../../components/gallery/viewer';
import { gallery } from '../../shared/dummyData';

export const GalleryPage: NextPage = () => {
    const [currentView, setCurrentView] = useState(0);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    function handleClickImage(idx: number) {
        return () => {
            setCurrentView(idx);
            setIsOpenModal(true);
        };
    }

    function handleNextBtn() {
        if (currentView < gallery.length - 1) {
            setCurrentView((prevState) => ++prevState);
        } else {
            setCurrentView(0);
        }
    }

    function handlePrevBtn() {
        if (!currentView) {
            setCurrentView(gallery.length - 1);
        } else {
            setCurrentView((prevState) => --prevState);
        }
    }

    return (
        <>
            <div className='gallery'>
                <div className='gallery__wrapper'>
                    <h3 className='gallery__title title'>Галерея</h3>
                    <Grid
                        handleClickImage={handleClickImage}
                        gallery={gallery}
                    />
                </div>
            </div>
            <Viewer
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                currentView={currentView}
                gallery={gallery}
                handleNextBtn={handleNextBtn}
                handlePrevBtn={handlePrevBtn}
            />
        </>
    );
};

export default GalleryPage;
