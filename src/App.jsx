import Container from './components/Container';
import Navbar from './components/Navbar';
import Player from './components/Player';
import Surah from './components/Surah';
import SurahDetail from './components/SurahDetail';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

const surah = [
  {
    "number": 1,
    "name": "سُورَةُ ٱلْفَاتِحَةِ",
    "englishName": "Al-Faatiha",
    "englishNameTranslation": "The Opening",
    "numberOfAyahs": 7,
    "revelationType": "Meccan"
  },
  {
    "number": 2,
    "name": "سُورَةُ البَقَرَةِ",
    "englishName": "Al-Baqara",
    "englishNameTranslation": "The Cow",
    "numberOfAyahs": 286,
    "revelationType": "Medinan"
  },
  {
    "number": 3,
    "name": "سُورَةُ آلِ عِمۡرَانَ",
    "englishName": "Aal-i-Imraan",
    "englishNameTranslation": "The Family of Imraan",
    "numberOfAyahs": 200,
    "revelationType": "Medinan"
  }
];

function App() {
  return (
    <div className="bg-gray-50 min-h-screen relative pb-40">
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Surah surah={surah} />} />
            <Route path="/surah/:number" element={<SurahDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Player />
      </Router>
    </div >
  )
}

export default App;
