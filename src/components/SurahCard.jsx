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
                    <HeartIcon className={`favorite-buttons block h-6 w-6 ${getCurrentData("_favorites").some(fav => fav.number == number) ? 'text-green-500 hover:text-gray-300' : 'text-gray-300 hover:text-green-500'} cursor-pointer transition hover:scale-125`} onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();

                        let favorites = getCurrentData("_favorites")
                        if (favorites.some(fav => fav.number == number)) {
                            favorites = favorites.filter(fav => fav.number != number);

                            if (e.target.classList.contains('favorite-buttons')) {
                                e.target.classList.replace('text-green-500', 'text-gray-300');
                                e.target.classList.replace('hover:text-gray-500', 'hover:text-green-500');
                            } else if (e.target.parentElement.classList.contains('favorite-buttons')) {
                                e.target.parentElement.classList.replace('text-green-500', 'text-gray-300');
                                e.target.parentElement.classList.replace('hover:text-gray-500', 'hover:text-green-500');
                            };
                        } else {
                            if (e.target.classList.contains('favorite-buttons')) {
                                e.target.classList.replace('text-gray-300', 'text-green-500');
                                e.target.classList.replace('hover:text-green-500', 'hover:text-gray-500');
                            } else if (e.target.parentElement.classList.contains('favorite-buttons')) {
                                e.target.parentElement.classList.replace('text-gray-300', 'text-green-500');
                                e.target.parentElement.classList.replace('hover:text-green-500', 'hover:text-gray-500');
                            };

                            favorites.push({ number });
                        }
                        document.body.focus(); // for remove hover state in mobile after click it
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