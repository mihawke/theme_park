import React, { createContext, useContext, useState, ReactNode } from 'react';
import Themes from '../styles/themes';

interface ThemeContextType {
    theme: typeof Themes[keyof typeof Themes];
    setTheme: React.Dispatch<React.SetStateAction<typeof Themes[keyof typeof Themes]>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(Themes.VintageTheme); // Set default theme here

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
