import {useState, useDebugValue} from 'react'


export function useStateWithLabel(initialValue, name) {
    const [value, setValue] = useState(initialValue);
    useDebugValue(`${name}: ${value}`);
    return [value, setValue];
}