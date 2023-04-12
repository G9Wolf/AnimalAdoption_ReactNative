import { createRef } from 'react';

export const NavigatorRef = createRef();

export const navigate = (name, params) => {
    NavigatorRef.current?.navigate(name, params);
};