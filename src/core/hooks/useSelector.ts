import { useSelector as useSelectorGeneric, TypedUseSelectorHook } from 'react-redux';
import { RootState } from 'store';

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorGeneric;
