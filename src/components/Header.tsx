import React, { useState } from 'react'
import { FaSearch, FaUserCircle } from 'react-icons/fa'
import { useTheme } from './ThemeContext';
import Themes from '../styles/themes';

const Header = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                height: '10%',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: 50,
                paddingRight: 50,
                backgroundColor: 'transparent',
            }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                <FaSearch size={24} style={{ color: theme.headerIcons }} />
                <p style={{ color: theme.headerIcons }}>Search</p>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <button
                    style={{
                        width: 24,
                        height: 24,
                        borderRadius: '100%',
                        border: 'none',
                        outline: 'none',
                        backgroundColor: Themes.DefaultTheme.background
                    }}
                    onClick={() => setTheme(Themes.DefaultTheme)}></button>
                <button
                    style={{
                        width: 24,
                        height: 24,
                        borderRadius: '100%',
                        border: 'none',
                        outline: 'none',
                        backgroundColor: Themes.MetallicChicTheme.background
                    }}
                    onClick={() => setTheme(Themes.MetallicChicTheme)}></button>
                <button
                    style={{
                        width: 24,
                        height: 24,
                        borderRadius: '100%',
                        border: 'none',
                        outline: 'none',
                        backgroundColor: Themes.VintageTheme.background
                    }}
                    onClick={() => setTheme(Themes.VintageTheme)}></button>
                <FaUserCircle size={30} style={{ color: theme.headerIcons }} />

            </div>
        </div>
    )
}

export default Header