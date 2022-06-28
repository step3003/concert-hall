import { RootState, RootDispatch } from './store';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

export const AppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const AppDispatch: () => RootDispatch = useDispatch;
