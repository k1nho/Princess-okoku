import { useState } from "react";
import usePlayerStore from "../store/store";
import { Card } from "./Card";
import { GiCardDraw, GiFlyingFlag, GiSpinningSword } from "react-icons/gi";

interface Iprops {
    setFullHand: React.Dispatch<React.SetStateAction<boolean>>;

}

// Modal component
const Modal: React.FC<Iprops> = ({ setFullHand }) => {
    const [handCards, removeCardFromHand, prepareDraw, addCardToHand, setGamePhase] =
        usePlayerStore((state) => [
            state.battleInfo.handCards,
            state.removeCardFromHand,
            state.prepareDraw,
            state.addCardToHand,
            state.setGamePhase
        ]);

    const handleDecision = (pos: number | string) => {
        if (pos !== "x") {
            const idx = pos as number;
            const card = handCards[idx];
            if (card !== null) {
                removeCardFromHand(card.id);
                prepareDraw();
                addCardToHand();
            }
        }
        setFullHand(false);
        setGamePhase("Attack")
    };

    return (


        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center z-10 ">
            <p className="text-lg font-bold text-white">Choose a card to replace:</p>
            <div className="p-2 rounded-md grid grid-cols-4 grid-rows-2 gap-2">
                {[0, 1, 2, 3, 4, "x"].map((num) => (
                    <button
                        key={num}
                        className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none"
                        onClick={() => handleDecision(num)}
                    >
                        {num !== "x" ? num as number + 1 : num}
                    </button>
                ))}
            </div>
        </div>
    );
};

export const CardControls: React.FC = () => {
    const [handCards, gamePhase, setGamePhase, setEGamePhase, setWinCond, prepareDraw, addCardToHand, setGameMode, finishBattle] =
        usePlayerStore((state) => [
            state.battleInfo.handCards,
            state.gamePhase,
            state.setGamePhase,
            state.setEGamePhase,
            state.setWinCond,
            state.prepareDraw,
            state.addCardToHand,
            state.setGameMode,
            state.finishBattle,
        ]);

    const [fullHand, setFullHand] = useState(false);

    const validCards = handCards.reduce((acc, val) => {
        if (val !== null) return acc + 1;
        return acc;
    }, 0);

    const handleDrawPhase = () => {
        prepareDraw();
        addCardToHand();
        setGamePhase("Attack")
    };

    const handleEndPhase = () => {
        setGamePhase("End")
        setEGamePhase("Draw")
        setWinCond()
    }

    const handleQuitBattle = () => {
        finishBattle();
        setGameMode("Dashboard");
    };



    return (
        <div className="flex gap-8">
            <div className="flex items-center space-x-2">
                {handCards.map((card) => {
                    return card ? <Card key={card.id} id={card.id} atkmode={false} /> : null;
                })}
            </div>
            {fullHand ? <Modal setFullHand={setFullHand} /> : <></>}
            <div className="flex flex-col items-center justify-center space-y-2">
                <button
                    className=" flex justify-center items-center space-x-2 bg-stone-900 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white"
                    onClick={() =>
                        validCards === 5 ? setFullHand(true) : handleDrawPhase()
                    }
                    disabled={gamePhase !== "Draw"}
                >
                    <GiCardDraw />
                    <p>Draw</p>
                </button>
                <button
                    className=" flex justify-center items-center space-x-2 bg-sky-800 rounded-full px-4 py-2 hover:bg-sky-900 transition ease-in-out duration-700 text-white text-md"
                    onClick={() => handleEndPhase()} disabled={gamePhase !== "Attack"}
                >
                    <GiSpinningSword />
                    <p>End Attack</p>
                </button>
                <button
                    className=" flex justify-center items-center space-x-2 bg-red-500 rounded-full px-4 py-2 hover:bg-red-400 transition ease-in-out duration-700 text-white text-lg"
                    onClick={handleQuitBattle}
                >
                    <GiFlyingFlag />
                    <p>Quit</p>
                </button>
            </div>
        </div>
    );
};
