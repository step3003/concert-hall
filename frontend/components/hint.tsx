import React from 'react';

type Props = {
    children: JSX.Element;
    text: 'string';
};

const Hint: React.FC<Props> = ({ children, text }) => {
    return (
        <div className='hint'>
            <div className='hint__text'>{text}</div>
            {children}
        </div>
    );
};

export default Hint;
