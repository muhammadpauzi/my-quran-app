import Container from './components/Container';
import Heading from './components/Heading';
import Input from './components/Input';
import Navbar from './components/Navbar';
import Player from './components/Player';
import SurahCard from './components/SurahCard';

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
    <div className="bg-gray-50 min-h-screen relative">
      <Navbar />
      <Container>
        <div className="flex items-center justify-between mb-5">
          <Heading className="text-3xl font-bold">Surah</Heading>
          <Input withLabel={false} placeholder="Enter a keyword..." nameAndID="keyword" className="w-72" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          {surah.map((s, i) => {
            return (
              <SurahCard {...s} key={i} />
            )
          })}
        </div>
      </Container>

      <Player />
    </div>
  )
}

export default App;
