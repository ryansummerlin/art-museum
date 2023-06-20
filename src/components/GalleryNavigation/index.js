import React from 'react';
import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';

function GalleryNavigation ({ galleries }) {
    return (
        <nav className='nav-bar'>
            <h1>Galleries</h1>
            <NavLink exact to='/'>
                Home
            </NavLink>
            {galleries.map(gallery => (
                <NavLink className='nav-item' key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
            ))}
        </nav>
    );
}

export default GalleryNavigation;
