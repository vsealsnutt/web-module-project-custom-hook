import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useDarkMode = (initalValue) => {
    const [darkMode, setDarkMode] = useState(initalValue);
    return [darkMode, setDarkMode];
}

export default useDarkMode;