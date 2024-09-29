import React, { useState } from 'react'
import { FaBell, FaCalendar, FaChartPie, FaUser, FaYinYang } from 'react-icons/fa'
import { FaChartSimple } from 'react-icons/fa6'
import { useTheme } from './ThemeContext'

const Navbar = () => {
    const { theme, setTheme } = useTheme();

    const IconStyle = {
        color: theme.navIcons
    }
    return (
        <nav
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
                width: '5%',
                height: '100%',
                alignItems: 'center',
                paddingTop: 30,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                backgroundColor:theme.secondaryBg
            }}
        >
            <FaYinYang
                size={24}
                style={IconStyle}
            />
            <div
                style={{ width: '60%', height: 1, backgroundColor: theme.background}}
            ></div>
            <FaUser size={24} style={IconStyle} />
            <FaChartSimple size={24} style={IconStyle} />
            <FaChartPie size={24} style={IconStyle} />
            <FaCalendar size={24} style={IconStyle} />
            <FaBell size={24} style={IconStyle} />
        </nav>
    )
}

export default Navbar