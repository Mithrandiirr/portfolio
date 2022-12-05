import { Link } from 'gatsby';
import React from 'react'
import Avatar from '../images/dd.png'

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({}) => {
        return (
            <header className='py-12 px-48'>
            <div className='flex flex-row items-center'>
                <div className='flex flex-1'>
                <Link to='/' className='text-xl font-bold'>
                    <img src={Avatar} alt="Avatar" className='rounded-full w-14' />
                </Link>
                </div>
                <ul className='flex flex-row gap-8 items-center'>
                    <li className='text-2xl'><Link to=''>About</Link></li>
                    <li className='text-2xl'><Link to=''>Project</Link></li>
                    <li className='text-2xl'><Link to=''>Contact</Link></li>
                </ul>
            </div>
            </header>
           
        );
}