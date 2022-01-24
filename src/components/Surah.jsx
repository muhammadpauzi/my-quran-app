import Heading from './Heading';
import Input from './Input';
import SurahCard from './SurahCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../helpers/axios';
import Spinner from './Spinner';

export default function Surah() {
    const [allSurah, setAllSurah] = useState([]);
    const [loading, setLoading] = useState(true);
    const [keyword, setKeyword] = useState("");
    const [allSurahInitial, setAllSurahInitial] = useState([]);

    const getAllSurah = async () => {
        const allSurah = await axios.get(`surah`);
        setAllSurahInitial([...allSurah.data.data]);
        setAllSurah(allSurah.data.data);
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
    }, []);

    useEffect(() => {
        searchSurah();
    }, [keyword]);

    return (
        <>
            <div className="flex items-stretch sm:items-center justify-between mb-3 sm:mb-5 flex-col sm:flex-row">
                <Heading className="text-xl sm:text-3xl font-bold mb-5 sm:mb-0 text-center">Surah</Heading>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
                {allSurah.map((surah, i) => {
                    return (
                        <Link to={`/surah/${surah.number}`} key={i}>
                            <SurahCard {...surah} />
                        </Link>
                    )
                })}
            </div>
        </>
    );
}