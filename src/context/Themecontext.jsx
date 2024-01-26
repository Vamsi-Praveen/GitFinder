import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(null);

export const useTheme = () => {
    let context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must used inside the Theme Provider')
    }
    return context
}

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        localStorage.setItem("theme", newTheme)
        setTheme(newTheme)

    }

    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
}
