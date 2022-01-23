import Container from './components/Container';
import Navbar from './components/Navbar';
import Player from './components/Player';
import Surah from './components/Surah';
import SurahDetail from './components/SurahDetail';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen relative pb-40">
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Surah />} />
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
