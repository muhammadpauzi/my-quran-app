import Card from "./Card";
import { HeartIcon } from '@heroicons/react/solid';
import Heading from "./Heading";
import { getCurrentData, saveData } from '../helpers/localStorage';
import { useEffect, useState } from "react";

export default function SurahCard({ number, englishName, englishNameTranslation, numberOfAyahs }) {
    return (
        <Card>
            <div className="flex items-center justify-between mb-4">
                <span className="rounded-full h-7 w-7 flex items-center justify-center bg-green-200 text-green-500 text-sm font-bold">{number}</span>
                <div>
                    <HeartIcon className={`favorite-buttons block h-6 w-6 ${getCurrentData("_favorites").some(fav => fav.number == number) ? 'text-green-500' : 'text-gray-300'} cursor-pointer transition hover:scale-125`} onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();

                        let favorites = getCurrentData("_favorites")

                        let element = null;
                        element = e.target.classList.contains('favorite-buttons') && e.target;
                        console.log(element);
                        if (!element)
                            element = e.target.parentElement.classList.contains('favorite-buttons') && e.target.parentElement;
                        console.log(element);

                        const isFavorited = favorites.some(fav => fav.number == number);

                        if (isFavorited) {
                            favorites = favorites.filter(fav => fav.number != number); // remove favorite with the number of surah in localStorage
                            if (element) {
                                element.classList.replace('text-green-500', 'text-gray-300');
                            };
                        } else {
                            if (element) {
                                element.classList.replace('text-gray-300', 'text-green-500');
                            };
                            favorites.push({ number });
                        }
                        saveData('_favorites', favorites);
                    }} />
                </div>
            </div>
            <div>
                <Heading tag="h3" className="font-bold text-black">{englishName}</Heading>
                <small className="font-medium text-gray-500">{englishNameTranslation}</small>
            </div>
        </Card>
    )
}