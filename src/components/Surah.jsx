import Heading from './Heading';
import Input from './Input';
import SurahCard from './SurahCard';
import { Link } from 'react-router-dom';

export default function Surah({ surah }) {
    return (
        <>
            <div className="flex items-stretch sm:items-center justify-between mb-5 flex-col sm:flex-row">
                <Heading className="text-lg sm:text-3xl font-bold mb-5 sm:mb-0 text-center">Surah</Heading>
                <Input withLabel={false} placeholder="Enter a keyword..." nameAndID="keyword" className="w-full sm:w-72" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
                {surah.map((s, i) => {
                    return (
                        <Link to={`/${s.number}`}>
                            <SurahCard {...s} key={i} />
                        </Link>
                    )
                })}
            </div>
        </>
    );
}