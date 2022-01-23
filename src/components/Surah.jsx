import Heading from './Heading';
import Input from './Input';
import SurahCard from './SurahCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../helpers/axios';

export default function Surah() {
    const [allSurah, setAllSurah] = useState([]);

    const getAllSurah = async () => {
        const allSurah = await axios.get('surah');
        setAllSurah(allSurah.data.data);
    }

    useEffect(() => {
        getAllSurah();
    }, []);

    return (
        <>
            <div className="flex items-stretch sm:items-center justify-between mb-3 sm:mb-5 flex-col sm:flex-row">
                <Heading className="text-xl sm:text-3xl font-bold mb-5 sm:mb-0 text-center">Surah</Heading>
                <Input withLabel={false} placeholder="Enter a keyword..." nameAndID="keyword" className="w-full sm:w-72" />
            </div>

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