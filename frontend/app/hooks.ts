import { useEffect, useState } from 'react';
import { RootState, RootDispatch } from './store';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => RootDispatch = useDispatch;

export const useSSR = () => {
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);

    return isSSR;
};
