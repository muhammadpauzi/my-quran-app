import Heading from './Heading';
import Input from './Input';
import SurahCard from './SurahCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../helpers/axios';
import Spinner from './Spinner';
import { getCurrentData } from '../helpers/localStorage';
import BackToTop from './BackToTop';

export default function Surah({ page }) {
    const [allSurah, setAllSurah] = useState([]);
    const [loading, setLoading] = useState(true);
    const [keyword, setKeyword] = useState("");
    const [allSurahInitial, setAllSurahInitial] = useState([]);

    const getAllSurah = async () => {
        let allSurah = (await axios.get(`surah`)).data.data;
        if (page == "favorites") {
            const favorites = getCurrentData('_favorites').map(fav => fav.number);
            allSurah = allSurah.filter(surah => {
                if (favorites.includes(surah.number))
                    return surah;
            });
        }
        setAllSurahInitial([...allSurah]); // copy array
        setAllSurah(allSurah);
        setLoading(false);
    }

    const searchSurah = () => {
        let searchedSurah = [];
        allSurahInitial.map(surah => {
            if (surah.englishName.toLowerCase().includes(keyword) || surah.englishNameTranslation.toLowerCase().includes(keyword)) {
                searchedSurah.push(surah);
            }
        });
        setAllSurah(searchedSurah);
    }

    useEffect(() => {
        getAllSurah();
    }, [page]);

    useEffect(() => {
        searchSurah();
    }, [keyword]);

    return (
        <>
            <BackToTop />

            <div className="flex items-stretch sm:items-center justify-between mb-3 sm:mb-5 flex-col sm:flex-row">
                <Heading className="text-xl sm:text-3xl font-bold mb-5 sm:mb-0 text-center">{page == "home" ? 'Surah' : 'Surah Favorites'}</Heading>
                <Input onKeyUp={(e) => {
                    if (e.which === 13) { // enter
                        setKeyword(e.target.value.toLowerCase());
                    }
                }} withLabel={false} placeholder="Enter a keyword..." nameAndID="keyword" className="w-full sm:w-72" />
            </div>

            {loading && <Spinner />}

            {!loading && !allSurah.length && (
                <p className="text-red-500 font-bold py-10 text-center">Surah not found with keyword <span className="text-gray-800">'{keyword}'.</span></p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2" id="a">
                {allSurah.map((surah, i) => {
                    return (
                        <Link to={`/surah/${surah.number}`} key={i} className="hide-tap-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded transition">
                            <SurahCard {...surah} />
                        </Link>
                    )
                })}
            </div>
        </>
    );
}