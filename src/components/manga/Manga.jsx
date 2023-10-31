import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../manga/manga.css'

const Manga = () => {
    const [manga, setManga] = useState([]);
    // Replace with the actual anime ID
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`https://api.jikan.moe/v4/manga`);
          const data = res.data.data;
          console.log(data)
          if (data.length > 0) {
            setManga(data);
          } else {
            setManga([]);
          }

        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <div className='manga-container'>
      <h1>Manga List</h1>
      <ul className='manga-list'>
        {manga.map((item, index) => (
          <li key={index} className='manga-item'>
            <img src={item.images.jpg.image_url} alt="Anime" />
            <div className='items'>
                <h1>{item.title}</h1>
              <p>{item.status}</p>
              <span className='author-item'>
                Author: <p>{item.authors[0].name}</p>
              </span>
              <p className='genre-text'>Genres:</p> 
              <span className='genre-item'>
                {item.genres.map((genre, genreIndex) => (
                  <span key={genreIndex}>
                    <p>{genre.name}</p>
                        {genreIndex !== item.genres.length - 1 && <span>,</span> }
                  </span>
                ))}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Manga