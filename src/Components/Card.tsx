import { useEffect, useState } from "react";
import usePlayerStore, { getCard } from "../store/store";
import { GiRollingEnergy, GiSwordWound, GiBouncingSword } from "react-icons/gi";
import { cardImages } from "./cardImages"
import { parseInt } from "lodash";
import { motion } from "framer-motion"

interface props {
    id: string;
    atkmode: boolean;
    atk: number,
    def: number,
    cost: number
}

export const Card: React.FC<props> = ({ id, atkmode, atk, def, cost }) => {
    const [
        playedCards,
        ePlayedCards,
        addCardToPlay,
        removeCardFromHand,
        attackCard,
        attackElp,
        gamephase,
        energy,
        setEnergy,
    ] = usePlayerStore((state) => [
        state.battleInfo.playedCards,
        state.enemyBattleInfo.playedCards,
        state.addCardToPlay,
        state.removeCardFromHand,
        state.attackCard,
        state.attackElp,
        state.gamePhase,
        state.battleInfo.energy,
        state.setEnergy,
    ]);


    const [isCommandOpen, setIsCommandOpen] = useState(false);
    const [isAttackOpen, setIsAttack] = useState(false);
    const [hasAttacked, setHasattacked] = useState(false);
    const card = id ? getCard(id) : getCard("1");
    const cardIdx = parseInt(id, 10)
    const cardImg = cardImages[cardIdx - 1]


    useEffect(() => {
        if (gamephase === "Attack") setHasattacked(false)
    }, [gamephase])

    const emptyFieldSize = ePlayedCards.reduce((acc, val) => {
        if (val === null) return acc + 1;
        return acc;
    }, 0);

    const fullFieldSize = playedCards.reduce((acc, val) => {
        if (val !== null) return acc + 1;
        return acc;
    }, 0);

    const handleCommandClose = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        pos: number
    ) => {
        e.stopPropagation();
        removeCardFromHand(card.id);
        addCardToPlay(pos, card);
        setEnergy(cost);
        setIsCommandOpen(false);
    };

    const handleAttackClose = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        pos: number
    ) => {
        e.stopPropagation();
        const eCard = ePlayedCards[pos];
        if (eCard !== null) attackCard(card, eCard);
        else attackElp(atk);
        setIsAttack(false);
        setHasattacked(true);
    };


    const Organize = (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex justify-center items-center z-10 curor-pointer">
            <div className="">
                {fullFieldSize === 8 ? (
                    <button onClick={() => setIsCommandOpen(false)}>Full Field</button>
                ) : (
                    <div className="flex flex-col">
                        <button
                            className="bg-red-500 rounded-full text-white text-xl"
                            onClick={() => setIsCommandOpen(false)}
                        >
                            X
                        </button>
                        <div className="p-2 rounded-md grid grid-cols-4 grid-rows-2 gap-2">
                            {playedCards.map((card, pos) => {
                                return card ? null : (
                                    <div
                                        key={pos}
                                        className="bg-red-500 p-4 border-2 border-amber-300 rounded-md text-white font-semibold cursor-pointer"
                                        onClick={(e) => handleCommandClose(e, pos)}
                                    >
                                        {pos}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    const AttackMode = (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex justify-center items-center z-10">
            <div className="">
                {emptyFieldSize === 8 ? (
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ ease: "easeInOut" }}
                        className="bg-stone-900 rounded-xl cursor-pointer flex justify-center items-center p-4 space-x-4 hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
                        onClick={(e) => handleAttackClose(e, 0)}
                    >

                        <GiBouncingSword className="bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg text-4xl" />
                        <div>
                            <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text text-4xl">
                                Direct Attack
                            </h1>

                        </div>
                    </motion.div>
                ) : (
                    <div className="flex flex-col space-y-4">
                        <button
                            className="bg-red-500 rounded-full text-white text-xl"
                            onClick={() => setIsAttack(false)}
                        >
                            X
                        </button>
                        <div className="p-2 rounded-md grid grid-cols-4 grid-rows-2 gap-2">
                            {ePlayedCards.map((eCard, pos) => {
                                return eCard ? (
                                    <div
                                        key={pos}
                                        className="bg-red-500 p-4 border-2 border-amber-300 rounded-md text-white font-semibold cursor-pointer"
                                        onClick={(e) => handleAttackClose(e, pos)}
                                    >
                                        {pos}
                                    </div>
                                ) : null;
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="w-28">
            {isCommandOpen && Organize}
            {isAttackOpen && AttackMode}
            <div
                id="info"
                className="flex justify-center bg-yellow-500 relative text-white rounded-t-md"
            >
                <div className="absolute -top-4 -left-6 rounded-full  px-3 py-1 border-2 border-stone-900 bg-blue-800 text-amber-100 font-semibold">
                    {cost}
                </div>
                <div className="font-semibold">{card.name}</div>
            </div>
            <img src={cardImg} alt="ai_princess" className="w-28 h-28 rounded-sm" />
            <div className="flex justify-between text-amber-100 font-semibold bg-stone-900">
                <div className="bg-red-700 rounded-br px-3 py-1 flex items-center justify-center">
                    {atk > 0 ? atk : "S"}
                </div>
                {atkmode ? (
                    <button
                        className="bg-red-500 text-white rounded-full p-2"
                        onClick={() => setIsAttack(true)}
                        disabled={hasAttacked || gamephase !== "Attack"}
                    >
                        <GiSwordWound />
                    </button>
                ) : (
                    <button
                        className="bg-amber-500 text-white rounded-full p-2"
                        onClick={() => setIsCommandOpen(true)}
                        disabled={gamephase !== "Attack" || energy - cost < 0}
                    >
                        <GiRollingEnergy />
                    </button>
                )}
                <div className="bg-blue-700 rounded-bl px-3 py-1 flex items-center justify-center">
                    {def > 0 ? def : "S"}
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
        </div>
    );
};
