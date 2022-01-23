import Ayah from './Ayah';
import Heading from './Heading';
import Input from './Input';
import { PlayIcon } from '@heroicons/react/solid';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../helpers/axios';

export default function SurahDetail() {
    const [surah, setSurah] = useState([]);

    const params = useParams();
    const navigate = useNavigate();

    const getSurah = async (numberOfSurah) => {
        try {
            const { data } = await axios.get(`surah/${numberOfSurah}/ar.alafasy`);
            const { data: dataInTR } = await axios.get(`surah/${numberOfSurah}/en.transliteration`);
            const { data: dataInID } = await axios.get(`surah/${numberOfSurah}/id.indonesian`);

            const mappedSurah = data.data.ayahs.map(ayah => {
                ayah.textInTR = dataInTR.data.ayahs[ayah.numberInSurah - 1].text;
                ayah.textInID = dataInID.data.ayahs[ayah.numberInSurah - 1].text;
                return ayah;
            });
            data.data.ayahs = mappedSurah;

            setSurah(data.data);
            console.log(data.data);
        } catch (e) { // if number of surah is not valid
            navigate('/');
        }
    }

    useEffect(() => {
        getSurah(params.number);
    }, []);

    return (
        <>
            <div className="flex items-stretch sm:items-center justify-between mb-3 sm:mb-5 flex-col sm:flex-row pt-5">
                <Heading className="text-xl sm:text-3xl font-bold mb-5 sm:mb-0 text-center flex items-center gap-5">
                    Surah {surah.englishName}
                    <button className="rounded-full bg-green-500 h-9 w-9">
                        <PlayIcon className="text-white" />
                    </button>
                </Heading>
            </div>

            <div className="p-5 bg-white rounded grid grid-cols-1 sm:grid-cols-4 gap-2 font-bold text-base mb-4">
                <span>Surah to : <span className="text-green-500 sm:block">{surah.number}</span></span>
                <span>Total Ayahs : <span className="text-green-500 sm:block">{surah.numberOfAyahs}</span></span>
                <span>Revelation Type : <span className="text-green-500 sm:block">{surah.revelationType}</span></span>
                <span>Last Listened : <span className="text-green-500 sm:block">{(new Date()).toLocaleString()}</span></span>
            </div>

            <div className="space-y-5">
                {surah?.ayahs?.map((ayah, i) => {
                    return (
                        <Ayah key={i} ayah={ayah} />
                    )
                })}
            </div>
        </>
    );
}