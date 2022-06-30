import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '../modal';
import ArrowIcon from '../../public/icons/bigArrow.svg';

type Props = {
    currentView: number;
    gallery: string[];
    isOpenModal: boolean;
    setIsOpenModal: (val: boolean) => any;
    handleNextBtn: () => any;
    handlePrevBtn: () => any;
};

const Viewer: React.FC<Props> = ({
    isOpenModal,
    setIsOpenModal,
    handleNextBtn,
    handlePrevBtn,
    currentView,
    gallery,
}) => {
    const total = `${currentView + 1} / ${gallery.length}`;

    if (!isOpenModal) {
        return <></>;
    }

    return (
        <Modal
            className='viewer'
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
        >
            <button className='viewer__prev-btn' onClick={handlePrevBtn}>
                <span className='sr-only'>Назад</span>
                <ArrowIcon />
            </button>
            <div className='viewer__img'>
                <Image
                    src={gallery[currentView]}
                    width={100}
                    height={100}
                    layout='responsive'
                    objectFit='cover'
                    alt='Концертный зал'
                />
                <span className='viewer__total'>{total}</span>
            </div>
            <button className='viewer__next-btn' onClick={handleNextBtn}>
                <span className='sr-only'>Вперед</span>
                <ArrowIcon />
            </button>
        </Modal>
    );
};

export default Viewer;
