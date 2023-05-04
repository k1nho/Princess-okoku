import aiprincess from "../assets/decks/techno_princess/card_ai_princess.png";

export const Card: React.FC = () => {
    return (
        <div className="w-32">
            <div id="info" className="flex justify-center border-black bg-yellow-500 relative text-white">
                <div className="absolute -top-3 -left-4 rounded-full  px-3 py-1 border-black bg-blue-800 text-amber-100 font-semibold">3</div>
                <div className="font-semibold">Princess AI</div>
            </div>
            <img src={aiprincess} alt="ai_princess" className="w-32 h-32 rounded-sm" />
            <div className="flex justify-between text-amber-100 font-semibold bg-stone-900">
                <div className="bg-red-700 rounded-br px-3 py-1 flex items-center justify-center">
                    3
                </div>
                <div className="bg-blue-700 rounded-bl px-3 py-1 flex items-center justify-center">
                    2
                </div>
            </div>
            <div className="flex flex-wrap bg-stone-900 rounded-b-md">
                <p className="w-full text-xs text-white p-2"><span className="text-red-500 font-bold">Effect: </span>Search princess</p>
            </div>
        </div>
    )
}
