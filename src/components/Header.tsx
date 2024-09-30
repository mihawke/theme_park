import React, { useState } from 'react'
import { FaSearch, FaUserCircle } from 'react-icons/fa'
import { useTheme } from './ThemeContext';
import Themes from '../styles/themes';

interface DropdownProps {
    getTheme: (theme: typeof Themes[keyof typeof Themes]) => void
    backgroundColor: string
}
const Dropdown: React.FC<DropdownProps> = ({ getTheme, backgroundColor }) => {
    const [dropDownVisible, setDropDownVisible] = useState('none')
    const toggleVisibility = () => {
        setDropDownVisible(prev => (prev === 'flex' ? 'none' : 'flex'));
    };
    const handleThemeChange = (theme: typeof Themes[keyof typeof Themes]) => {
        getTheme(theme);
        toggleVisibility(); // Toggle the dropdown visibility after changing the theme
    };
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
            }}
        >
            <div>
                <button
                    onClick={toggleVisibility}
                    style={{
                        zIndex: 10,
                        height: '100%',
                        marginRight: 25,
                        backgroundColor: backgroundColor,
                        color: 'white'
                    }}
                >Themes</button>
            </div>
            <div
                style={{
                    display: dropDownVisible,
                    flexDirection: 'column',
                    zIndex: 10,
                    position: 'absolute',
                    top: '100%'
                }}
            >
                <button
                    style={{
                        backgroundColor: Themes.DefaultTheme.secondaryBg,
                        color: 'white'
                    }}
                    onClick={() => handleThemeChange(Themes.DefaultTheme)}
                >
                    Default
                </button>
                <button
                    style={{
                        backgroundColor: Themes.VintageTheme.secondaryBg,
                        color: 'white'
                    }}
                    onClick={() => handleThemeChange(Themes.VintageTheme)}
                >
                    Vintage
                </button>
                <button
                    style={{
                        backgroundColor: Themes.MetallicChicTheme.secondaryBg,
                        color: 'white'
                    }}
                    onClick={() => handleThemeChange(Themes.MetallicChicTheme)}
                >
                    Metallic
                </button>
                <button
                    style={{
                        backgroundColor: Themes.RetroTheme.secondaryBg,
                        color: 'white'
                    }}
                    onClick={() => handleThemeChange(Themes.RetroTheme)}
                >
                    Retro
                </button>
                <button
                    style={{
                        backgroundColor: Themes.TealShadesTheme.secondaryBg,
                        color: 'white'
                    }}
                    onClick={() => handleThemeChange(Themes.TealShadesTheme)}
                >
                    Teal
                </button>
                <button
                    style={{
                        backgroundColor: Themes.DowntownTheme.secondaryBg,
                        color: 'white'
                    }}
                    onClick={() => handleThemeChange(Themes.DowntownTheme)}
                >
                    Downtown
                </button>
                <button
                    style={{
                        backgroundColor: Themes.CoffeeTheme.secondaryBg,
                        color: 'white'
                    }}
                    onClick={() => handleThemeChange(Themes.CoffeeTheme)}
                >
                    Coffee
                </button>
                <button
                    style={{
                        backgroundColor: Themes.SkinTonesTheme.secondaryBg,
                        color: 'white'
                    }}
                    onClick={() => handleThemeChange(Themes.SkinTonesTheme)}
                >
                    SkinTone
                </button>
                <button
                    style={{
                        backgroundColor: Themes.RavenclawTheme.secondaryBg,
                        color: 'white'
                    }}
                    onClick={() => handleThemeChange(Themes.RavenclawTheme)}
                >
                    Ravenclawn
                </button>
                <button
                    style={{
                        backgroundColor: Themes.BeachTheme.secondaryBg,
                        color: 'white'
                    }}
                    onClick={() => handleThemeChange(Themes.BeachTheme)}
                >
                    Beach
                </button>
                <button
                    style={{
                        backgroundColor: Themes.SeafoamTheme.secondaryBg,
                        color: 'white'
                    }}
                    onClick={() => handleThemeChange(Themes.SeafoamTheme)}
                >
                    Seafoam
                </button>
                <button
                    style={{
                        backgroundColor: Themes.UnderwaterTheme.secondaryBg,
                        color: 'white'
                    }}
                    onClick={() => handleThemeChange(Themes.UnderwaterTheme)}
                >
                    Underwater
                </button>
            </div>
        </div>
    )
}

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
                }}
            >
                <FaSearch size={24} style={{ color: theme.headerIcons }} />
                <p style={{ color: theme.headerIcons }}>Search</p>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Dropdown getTheme={setTheme} backgroundColor={theme.primary} />

                <FaUserCircle size={30} style={{ color: theme.headerIcons }} />

            </div>
        </div>
    )
}

export default Header