import { useDispatch as useDispatchGeneric } from 'react-redux';
import { ThunkDispatch, Action } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const useDispatch: () => ThunkDispatch<RootState, undefined, Action> = useDispatchGeneric;
