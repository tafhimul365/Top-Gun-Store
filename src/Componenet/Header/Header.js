import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='header-div bg-slate-900 top-0 fixed z-10 w-full '>
            <CustomLink className='click' to='/home'>Home</CustomLink>
            <CustomLink className='click' to='/review'>Review</CustomLink>
            <CustomLink className='click' to='/dashboard'>Dashboard</CustomLink>
            <CustomLink className='click' to='/blog'>Blog</CustomLink>
            <CustomLink className='click' to='/about'>About</CustomLink>

        </div>
    );
};

export default Header;