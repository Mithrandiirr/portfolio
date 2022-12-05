import React from 'react'
import { Header } from './Header';
import '../styles/globals.css'

interface LayoutProps {
    children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
        return (
            <div className='max-w-[1920px] mx-auto'>
                <Header />
                <div className='mx-48'>
                    {children}
                </div>
            </div>
        );
}