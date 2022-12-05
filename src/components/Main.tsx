import React from 'react'

interface MainProps {

}

export const Main: React.FC<MainProps> = ({}) => {
        return (
            <main className='my-24'>
                <h1 className='text-6xl leading-tight'>
                Freelance full stack developer,<br/>
                based in Morocco
                </h1>
            </main>
        );
}