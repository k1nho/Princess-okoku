import { useState } from "react";
import aiprincess from "../assets/decks/techno_princess/card_ai_princess.png";
import { getCard } from "../store/store";

interface props {
    id?: string
}

export const Card: React.FC<props> = ({ id }) => {
    const [isCommandOpen, setIsCommandOpen] = useState(false)
    const card = id ? getCard(id) : getCard("1")

    const handleCommandClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        setIsCommandOpen(false)
    }

    return (
        <div className="w-28 cursor-pointer" onClick={() => setIsCommandOpen(true)}>
            {isCommandOpen && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex justify-center items-center z-10"
                >
                    <div className="bg-stone-900 p-2 rounded-md grid grid-cols-2 grid-rows-2 gap-2">
                        {[1, 2, 3, 4].map((number) => (
                            <div key={number} className="p-4 border-2 border-amber-300 rounded-md text-white font-semibold"
                                onClick={(e) => handleCommandClose(e)}>
                                {number}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div id="info" className="flex justify-center bg-yellow-500 relative text-white">
                <div className="absolute -top-4 -left-6 rounded-full  px-3 py-1 border-2 border-stone-900 bg-blue-800 text-amber-100 font-semibold">{card.cost}</div>
                <div className="font-semibold">{card.name}</div>
            </div>
            <img src={card.iml} alt="ai_princess" className="w-28 h-28 rounded-sm" />
            <div className="flex justify-between text-amber-100 font-semibold bg-stone-900">
                <div className="bg-red-700 rounded-br px-3 py-1 flex items-center justify-center">
                    {card.atk}
                </div>
                <div className="bg-blue-700 rounded-bl px-3 py-1 flex items-center justify-center">
                    {card.def}
                </div>
            </div>
            <div className="flex flex-wrap bg-stone-900 rounded-b-md">
                <p className="w-full text-xs text-white p-2"><span className="text-red-500 font-bold">Effect: </span>Instant damage 2</p>
            </div>

        </div>
    )
}
