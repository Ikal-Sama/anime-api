import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TopAnime from './components/TopAnime';
import MangaPage from './components/MangaPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
                <Route path='/' element={<Home />} />
                <Route path='top-anime' element={<TopAnime />} />
                <Route path='manga-list' element={<MangaPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
