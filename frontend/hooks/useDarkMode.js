import useLocalStorage from './useLocalStorage';

const useDarkMode = (initalValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(initalValue);
    return [darkMode, setDarkMode];
}

export default useDarkMode;