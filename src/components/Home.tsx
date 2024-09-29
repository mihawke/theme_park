import React, { useState } from 'react'
import { useTheme } from './ThemeContext';

const Card = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '250px',
                backgroundColor: theme.secondaryBg,
                color: theme.text,
                height: 'fit-content',
                borderRadius: 10,
                padding: 20,
                gap: 5
            }}>
            <h3>Title</h3>
            <p
                style={{
                    fontSize: 14,
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ante libero. Proin luctus non elit eu tristique. Phasellus consectetur egestas quam, vitae pulvinar arcu.</p>
            <button
                style={{
                    outline: 'none',
                    border: 'none',
                    borderRadius: 5,
                    padding: 8,
                    backgroundColor: theme.primary,
                    color: 'white',
                    width: 'fit-content'
                }}>Show more</button>
        </div>
    )
}

const Home = () => {
    return (
        <div
            style={{
                display: 'flex',
                backgroundColor: 'transparent',
                flex: 1,
                maxHeight: '100%',
                flexWrap: 'wrap',
                padding: 20,
                gap: 20,
                overflowY: 'auto'
            }}
        >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Home