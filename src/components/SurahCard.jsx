import Card from "./Card";
import { HeartIcon } from '@heroicons/react/solid';
import Heading from "./Heading";

export default function SurahCard({ number, englishName, englishNameTranslation, numberOfAyahs }) {
    return (
        <Card>
            <div className="flex items-center justify-between mb-4">
                <span className="rounded-full h-7 w-7 flex items-center justify-center bg-green-200 text-green-500 text-sm font-bold">{number}</span>
                <div>
                    <HeartIcon className="block h-6 w-6 text-gray-300 cursor-pointer hover:text-green-400 transition hover:scale-125" />
                </div>
            </div>
            <div>
                <Heading tag="h3" className="font-bold text-black">{englishName}</Heading>
                <small className="font-bold text-gray-700">{englishNameTranslation}</small>
            </div>
        </Card >
    )
}