import React from 'react';
import cn from 'classnames';

type Props = {
    children: JSX.Element | JSX.Element[];
    isOpenModal: boolean;
    setIsOpenModal: (val: boolean) => any;
    className?: string;
};

const Modal: React.FC<Props> = ({
    children,
    className: extClassName,
    isOpenModal,
    setIsOpenModal,
}) => {
    function handleClickOuterModal(e: React.MouseEvent<HTMLDivElement>) {
        const div = e.target as HTMLDivElement;

        if (Array.from(div.classList).includes('modal--active')) {
            setIsOpenModal(false);
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
