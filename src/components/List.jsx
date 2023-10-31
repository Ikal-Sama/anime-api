import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../components/list.css'

const List = () => {
  const [topAnime, setTopAnime] = useState([]);
  // Replace with the actual anime ID

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.jikan.moe/v4/top/anime`);
        const data = res.data.data;
        // console.log(data)
        if (data.length > 0) {
          setTopAnime(data);
        } else {
          setTopAnime([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="anime-list-container">
    <h1>Top Anime</h1>
    <ul className="anime-list">
      {topAnime.map((item, index) => (
        <li key={index} className="anime-item">
          <img src={item.images.jpg.image_url} alt="Anime" />
          <h1>{item.title}</h1>
          <div className="anime-details">
             <p>{item.rank}</p>
            <p>{item.status}</p>
            <p>{item.type}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default List;
