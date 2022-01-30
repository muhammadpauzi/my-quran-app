import Heading from "./Heading";

export default function Support() {
    return (
        <div className="py-5">
            <Heading className="text-xl sm:text-3xl font-bold mb-10">Support Me</Heading>
            <div className="flex gap-2 items-center">
                <a href="https://trakteer.id/muhammad-pauzi" className="p-10 bg-white text-green-500 font-bold mb-4 border-2 hover:border-green-500 transition rounded">
                    Support with Trakteer
                </a>
                <a href="https://trakteer.id/muhammad-pauzi" className="p-10 bg-white text-green-500 font-bold mb-4 border-2 hover:border-green-500 transition rounded">
                    Support with Saweria
                </a>
            </div>
        </div>
    )
}