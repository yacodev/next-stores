import Link from 'next/link';
import React from 'react';
import { HomeIcon } from '@primer/octicons-react';
import { ActiveLink } from '../';

const navItems = [
  {
    path: '/about',
    text: 'About',
  },
  {
    path: '/pricing',
    text: 'Pricing',
  },
  {
    path: '/contact',
    text: 'Contact',
  },
];

export const Navbar = () => {
  console.log('Navbar');
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 rounded'>
      <Link href='/' className=' flex items-center'>
        <HomeIcon className='mr-2' />
        <span> home</span>
      </Link>
      <div className='flex flex-1'></div>
      {navItems.map((item) => (
        <ActiveLink key={item.path} path={item.path} text={item.text} />
      ))}
    </nav>
  );
};
