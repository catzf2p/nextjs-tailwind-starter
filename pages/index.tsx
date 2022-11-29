import React from 'react';

function Index() {
    return (
        <>
            <div className='flex h-screen flex-col items-center justify-center'>
                <img
                    className='mb-6 w-40 animate-[spin_5s_linear_infinite]'
                    src='react-logo.png'
                ></img>
                <h1 className='bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-4xl font-extrabold text-transparent'>
                    Next.js + TypeScript + Tailwind CSS
                </h1>
            </div>
        </>
    );
}

export default Index;
