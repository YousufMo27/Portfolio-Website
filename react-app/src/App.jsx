import React from 'react'
import Hero from './components/hero';
import About from './components/About'
import Projects from './components/Projects';
import { useState,useEffect } from 'react';
import Footer from './components/Footer';
function App() {
    
    const [dark,setDark] = useState(null);

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: light)').matches) {
            setDark('light');
        }
        else {
            setDark('dark');
        }
    }, []);

    useEffect(() => {
        if(dark === 'dark') {
            document.documentElement.classList.add('dark');
        }

        else {
            document.documentElement.classList.remove('dark');
        }
    },[dark]);

    const darkModeSwitch = () => {
        setDark(dark === 'dark' ? 'light': 'dark');
    }
    return (
        <>
        <button type='button' onClick={darkModeSwitch} className='fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md'>
            {dark === 'dark' ? '☀️' : '🌑'}
        </button>
        <div className='font-inter bg:white dark:bg-slate-900'>
            <div className='max-w-5xl mx-auto w-11/12'>
                <Hero></Hero>
                <About></About>
                <Projects></Projects>
                <Footer></Footer>
            </div>
        </div>
        </>
    )
}

export default App;