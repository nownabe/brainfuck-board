import { createAction } from 'redux-actions';

const pass = <T>(payload: T) => (payload);

export const change = createAction<string, string>('SOURCE/CHANGE', pass);