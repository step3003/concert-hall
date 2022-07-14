import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setIsOpenModal } from '../features/common/commonSlice';

import cn from 'classnames';

type Props = {
    children: JSX.Element | JSX.Element[];
    className?: string;
};

const Modal: React.FC<Props> = ({ children, className: extClassName }) => {
    const dispatch = useAppDispatch();
    const { isOpenModal } = useAppSelector((state) => state.common);

    function handleClickOuterModal(e: React.MouseEvent<HTMLDivElement>) {
        const div = e.target as HTMLDivElement;

        if (Array.from(div.classList).includes('modal--active')) {
            dispatch(setIsOpenModal(false));
        }
    }

    return (
        <div
            className={cn(`${extClassName} modal`, {
                'modal--active': isOpenModal,
            })}
            onClick={handleClickOuterModal}
        >
            {children}
        </div>
    );
};

export default Modal;
