import Ayah from './Ayah';
import Heading from './Heading';
import { Fragment } from 'react';
import { ChevronDownIcon, PlayIcon } from '@heroicons/react/solid';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../helpers/axios';
import Spinner from './Spinner';
import { Menu, Transition } from '@headlessui/react';

export default function SurahDetail() {
    const [surah, setSurah] = useState([]);
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        } catch (e) { // if number of surah is not valid
            navigate('/');
        }
    }

    useEffect(() => {
        getSurah(params.number);
    }, []);

    if (loading)
        return (<Spinner />)

    return (
        <>
            <div className="flex items-stretch sm:items-center justify-between mb-3 sm:mb-5 flex-col sm:flex-row pt-5">
                <Heading className="text-xl sm:text-3xl font-bold mb-5 sm:mb-0 text-center flex items-center gap-5">
                    Surah {surah.englishName}
                    <button className="rounded-full bg-green-500 h-9 w-9">
                        <PlayIcon className="text-white" />
                    </button>
                </Heading>

                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-500 rounded">
                            Translation
                            <ChevronDownIcon
                                className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                                aria-hidden="true"
                            />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                                <Menu.Item>
                                    <button
                                        className='bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm'
                                    >
                                        Edit
                                    </button>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
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