import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../components/episode.css'

const Episode = () => {
    const [recentEp, setRecentEp] = useState([]);
    // Replace with the actual anime ID
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`https://api.jikan.moe/v4/watch/episodes`);
          const data = res.data.data;
          console.log(data)
          if (data.length > 0) {
            setRecentEp(data);
          } else {
            setRecentEp([]);
          }

        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <div className="episode-container">
    <h1>Recent Episode</h1>
    <ul className="episode-list">
      {recentEp.map((item, index) => (
        <li key={index} className="episode-item">
          <img src={item.entry.images.jpg.image_url} alt="Anime" />
          <h1>{item.entry.title}</h1>
          <div className="">
            <p>{item.episodes[0].title}</p>
            
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Episode