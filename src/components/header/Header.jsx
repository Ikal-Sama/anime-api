import React from 'react'
import  '../header/header.css';
const Header = () => {
  return (
    <div className='Header'>
        <div className='logo'>
            <h2>Jikan</h2>
        </div>
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="top-anime">Top Anime</a></li>
                <li><a href="manga-list">Manga</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header