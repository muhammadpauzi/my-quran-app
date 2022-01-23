import Card from "./Card";
import Heading from "./Heading";

export default function Ayah() {
    return (
        <Card>
            <div className="mb-4">
                <span className="rounded-full h-7 w-7 flex items-center justify-center bg-green-200 text-green-500 text-sm font-bold">1</span>
            </div>
            <div>
                <small className="block font-bold text-green-500 text-right mb-3 text-lg sm:text-xl">
                    اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُ
                </small>
                <Heading tag="h3" className="font-bold text-black">Bismillah</Heading>
                <small className="font-medium text-gray-500">blalblabla</small>
            </div>
        </Card >
    )
}