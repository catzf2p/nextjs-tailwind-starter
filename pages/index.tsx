import React from 'react';

function Index() {
    return (
        <>
            <div className='flex h-screen flex-col items-center justify-center'>
                <img
                    className='mb-6 w-40 animate-[spin_5s_linear_infinite]'
                    src='react-logo.png'
                ></img>
                <div className='flex flex-col bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-center text-4xl font-extrabold text-transparent md:flex-row'>
                    <span>Next.js</span>
                    <span className='px-2'>+</span>
                    <span>TypeScript</span>
                    <span className='px-2'>+</span>
                    <span>Tailwind CSS</span>
                </div>
            </div>
        </>
    );
}

export default Index;
