import Card from "./Card";
import Heading from "./Heading";

export default function Ayah({ ayah }) {
    return (
        <Card>
            <div className="mb-4">
                <span className="rounded-full h-7 w-7 flex items-center justify-center bg-green-200 text-green-500 text-sm font-bold">{ayah.numberInSurah}</span>
            </div>
            <div>
                <small className="block font-bold text-green-500 text-right mb-4 text-xl sm:text-xl">{ayah.text}</small>
                <Heading tag="h3" className="font-bold text-black text-lg mb-2">{ayah.textInTR}</Heading>
                <small className="font-medium text-gray-500 text-base">{ayah.textInID}</small>
            </div>
        </Card >
    )
}