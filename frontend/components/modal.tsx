import React from 'react';

import cn from 'classnames';

type Props = {
    children: JSX.Element | JSX.Element[];
    className?: string;
    isOpenModal: boolean;
    closeModal: () => any;
};

const Modal: React.FC<Props> = ({
    children,
    className: extClassName,
    isOpenModal,
    closeModal,
}) => {
    function handleClickOuterModal(e: React.MouseEvent<HTMLDivElement>) {
        const div = e.target as HTMLDivElement;

        if (Array.from(div.classList).includes('modal--active')) {
            closeModal();
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
