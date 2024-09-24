import { createContext } from "react";


export const themeContext = createContext({
    value: 'light',
    onChangeTheme: () => {
    }
})