import Ayah from './Ayah';
import Heading from './Heading';
import Input from './Input';
import { PlayIcon } from '@heroicons/react/solid';

export default function SurahDetail() {
    return (
        <>
            <div className="flex items-stretch sm:items-center justify-between mb-3 sm:mb-5 flex-col sm:flex-row">
                <Heading className="text-xl sm:text-3xl font-bold mb-5 sm:mb-0 text-center">Surah Al-Fatihah</Heading>
                <Input withLabel={false} placeholder="Enter a keyword..." nameAndID="keyword" className="w-full sm:w-72" />
            </div>

            <div className="py-5 text-center">
                <button className="rounded-full bg-green-500 h-9 w-9">
                    <PlayIcon className="text-white" />
                </button>
            </div>

            <div className="space-y-5">
                {[1, 2, 3, 4].map((s, i) => {
                    return (
                        <Ayah key={i} />
                    )
                })}
            </div>
        </>
    );
}