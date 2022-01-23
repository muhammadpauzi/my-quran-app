import { HeartIcon } from "@heroicons/react/solid";
import Container from "./Container";
import Heading from "./Heading";

export default function Player() {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-5 drop-shadow-2xl">
            <Container withPadding={false}>
                <div className="flex items-center gap-10 justify-center">
                    <div className="flex items-center justify-between">
                        <span className="rounded-full h-10 w-10 flex items-center justify-center bg-green-200 text-green-500 text-sm font-bold mr-5">1</span>
                        <div>
                            <Heading tag="h2" className="font-bold text-black text-lg">Al Fatihah</Heading>
                            <small className="font-bold text-gray-700">The Opening</small>
                        </div>
                    </div>
                    <div>
                        <audio controls className="w-96" />
                    </div>
                    <div>
                        <HeartIcon className="block h-6 w-6 text-gray-300 cursor-pointer hover:text-green-400 transition hover:scale-125" />
                    </div>
                </div>
            </Container>
        </div>
    )
}