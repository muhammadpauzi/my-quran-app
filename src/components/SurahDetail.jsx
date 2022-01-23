import Heading from './Heading';
import Input from './Input';

export default function SurahDetail() {
    return (
        <>
            <div className="flex items-center justify-between mb-5">
                <Heading className="text-3xl font-bold">Surah Al-Fatihah</Heading>
                <Input withLabel={false} placeholder="Enter a keyword..." nameAndID="keyword" className="w-72" />
            </div>

            <div className="space-y-5">
                {[1, 2, 3, 4].map((s, i) => {
                    return (
                        <p key={i}>{s}</p>
                    )
                })}
            </div>
        </>
    );
}