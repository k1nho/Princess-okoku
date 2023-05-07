import { useState } from "react";
import usePlayerStore, { getCard } from "../store/store";

interface props {
    id?: string;
    atkmode: boolean
}

export const Card: React.FC<props> = ({ id, atkmode }) => {
    const [playedCards, addCardToPlay, removeCardFromHand, gamePhase] = usePlayerStore(
        (state) => [
            state.battleInfo.playedCards,
            state.addCardToPlay,
            state.removeCardFromHand,
            state.gamePhase
        ]
    );
    const [isCommandOpen, setIsCommandOpen] = useState(false);
    const card = id ? getCard(id) : getCard("1");

    const handleCommandClose = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        pos: number
    ) => {
        e.stopPropagation();
        removeCardFromHand(card.id);
        addCardToPlay(pos, card);
        setIsCommandOpen(false);
    };

    const Organize = (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex justify-center items-center z-10">
            <div className="p-2 rounded-md grid grid-cols-4 grid-rows-2 gap-2">
                {playedCards.map((card, pos) => {
                    return card ? null : (
                        <div
                            className="bg-red-500 p-4 border-2 border-amber-300 rounded-md text-white font-semibold"
                            onClick={(e) => handleCommandClose(e, pos)}
                        >
                            {pos}
                        </div>
                    );
                })}
            </div>
        </div>
    )

    return (
        <button className="w-28 cursor-pointer" onClick={() => setIsCommandOpen(true)} disabled={gamePhase !== "Attack" || atkmode}>
            {isCommandOpen && Organize
            }
            <div
                id="info"
                className="flex justify-center bg-yellow-500 relative text-white rounded-t-md"
            >
                <div className="absolute -top-4 -left-6 rounded-full  px-3 py-1 border-2 border-stone-900 bg-blue-800 text-amber-100 font-semibold">
                    {card.cost}
                </div>
                <div className="font-semibold">{card.name}</div>
            </div>
            <img src={card.iml} alt="ai_princess" className="w-28 h-28 rounded-sm" />
            <div className="flex justify-between text-amber-100 font-semibold bg-stone-900">
                <div className="bg-red-700 rounded-br px-3 py-1 flex items-center justify-center">
                    {card.atk > 0 ? card.atk : "S"}
                </div>
                {atkmode && <button>Attack</button>}
                <div className="bg-blue-700 rounded-bl px-3 py-1 flex items-center justify-center">
                    {card.def > 0 ? card.def : "S"}
                </div>
            </div>
            <div className="flex flex-wrap bg-stone-900 rounded-b-md">
                {card.description ? (
                    <p className="w-full text-xs text-white p-2">
                        <span className="text-red-500 font-bold">Effect: </span>
                        {card.description}
                    </p>
                ) : (
                    <p className="w-full text-xs text-white p-2">Normal card</p>
                )}
            </div>
        </button>
    );
};
