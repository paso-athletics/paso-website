type RunTypeInput = {
    data: RunType
};

interface RunType {
    id: string;
    title: string;
    desc: string;
    location: string;
    time: string;
    bgType: string;
    bgContent: string;
}

export default function Runtype(run : RunTypeInput) {
    const runTopic = run.data;
    const videoBackground = runTopic.bgType == 'video';

    return (
        <div className="relative h-[500px] overflow-hidden">
            {
                videoBackground && 
                <video className="relative w-full bottom-[150px] md:bottom-[500px]" autoPlay loop muted playsInline>
                    <source type="video/mp4" src={runTopic.bgContent}></source>
                </video>    
            }
            <div className="absolute bg-black opacity-50 w-full h-full top-[0px]"></div>
            <div className="absolute w-full p-4 vertical-align">
                <div>
                    <h2 className="text-2xl uppercase tracking-[5px]">{`${runTopic.title}`}</h2>
                    <p className="text-justify md:text-start">{`${runTopic.desc}`}</p>
                    <div className="flex mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 h-auto" viewBox="0 0 16 16" fill="currentColor">
                            <path fillRule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-1">{`${runTopic.location}`}</span>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 h-auto" viewBox="0 0 16 16" fill="currentColor">
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-1">{`${runTopic.time}`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}