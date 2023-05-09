import usePlayerStore from "../store/store";
import {
    GiSpellBook,
    GiTreasureMap,
    GiCogLock,
    GiMagicGate,
    GiRoundStar,
    GiIdCard,
    GiLaurelCrown,
    GiCancel,
} from "react-icons/gi";
import { IoIosStats } from "react-icons/io";
import { DeckDisplay } from "./DeckDisplay";
import { StaticCard } from "./StaticCard";
import { motion } from "framer-motion"
import { useState } from "react";

const storybgs = [
    { bg: "src/assets/bgs/bg_machina_world.png", name: "Machina Kingdom", deckName: "Techno Princess" },
    { bg: "src/assets/bgs/bg_dragons_den.png", name: "Dragon's Den", deckName: "Dragon Empire" },
    { bg: "src/assets/bgs/bg_road_to_starry.png", name: "Road To Starry", deckName: "Spirit Fairies" },
    { bg: "src/assets/bgs/bg_cosmos.png", name: "Uverworld", deckName: "Talking Cats" },
];

export const PlayerStats: React.FC = () => {
    const [info, level, setGameMode, setPermaDeck, setBattleDeck, setEBattleDeck, setFirstRoundHand, ownedDecks] = usePlayerStore((state) => [
        state.info,
        state.level,
        state.setGameMode,
        state.setDeck,
        state.setBattleDeck,
        state.setEBattleDeck,
        state.setFirstRoundHand,
        state.owned
    ]);

    const [OpenDeckChoice, setOpenDeckChoice] = useState(false)

    const handleExplore = () => {
        setBattleDeck();
        setEBattleDeck();
        setFirstRoundHand();
        setGameMode("Battle");
    };

    const changeDeck = (deckId: number) => {
        setPermaDeck(deckId)
        setOpenDeckChoice(false)
    }

    const storybg = storybgs[level % 4];


    const DeckChoice = (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center z-10">
            <p className="text-lg font-bold text-white">Deck to take on adventure:</p>
            <div className="p-2 rounded-md grid grid-cols-4 grid-rows-2 gap-2">
                {ownedDecks.map((deckId) => (
                    <button
                        key={deckId}
                        className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none"
                        onClick={() => changeDeck(deckId)}
                    >
                        {storybgs[deckId].deckName}
                    </button>
                ))}
            </div>

            <button className="px-4 py-2 rounded-md  text-white bg-red-500 hover:bg-red-400 focus:outline-none" onClick={() => setOpenDeckChoice(false)}><GiCancel /></button>
        </div>

    )




    return (
        <div className="min-h-screen flex justify-around items-center space-x-2">
            {OpenDeckChoice && DeckChoice}
            <div className="flex flex-col justify-center items-center bg-stone-900 space-y-4 p-4 rounded-xl">
                <div>
                    <h4 className="text-white text-xl font-semibold">Okoku Center</h4>
                </div>
                <div className="flex justify-center items-center space-x-4">
                    <button
                        className="flex items-center space-x-2 bg-stone-600 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white"
                        onClick={handleExplore}
                    >
                        <GiTreasureMap />
                        <p>Continue</p>
                    </button>
                    <button
                        className="flex items-center space-x-2 bg-stone-600 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white"
                        onClick={() => setGameMode("Story")}
                    >
                        <GiSpellBook />
                        <p>Read Story</p>
                    </button>
                    <button
                        className="flex items-center space-x-2 bg-stone-600 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white"
                        onClick={() => setGameMode("Learn")}
                    >
                        <GiCogLock />
                        <p>Learn</p>
                    </button>
                    <button
                        className="flex items-center space-x-2 bg-stone-600 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white"
                        onClick={() => setOpenDeckChoice(true)}
                    >
                        <GiMagicGate />
                        <p>Change Deck</p>
                    </button>
                </div>

                <div>
                    <DeckDisplay />
                </div>
            </div>

            <div>
                <div className="flex flex-col justify-center bg-stone-900 space-y-4 p-6 rounded-xl">
                    <div>
                        <h4 className="text-white text-xl font-semibold text-center">
                            {info.name} Adventure
                        </h4>
                    </div>
                    <div className="flex justify-center items-center space-x-4">
                        <button className="flex items-center space-x-2 bg-stone-600 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white">
                            <IoIosStats />
                            <p>Stats</p>
                        </button>
                        <button className="flex items-center space-x-2 bg-stone-600 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white">
                            <GiIdCard />
                            <p>Story Progression</p>
                        </button>
                        <button className="flex items-center space-x-2 bg-stone-600 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white">
                            <GiRoundStar />
                            <p>Favorite Card</p>
                        </button>
                    </div>
                    <div className="text-white space-y-1 rounded-xl p-2 bg-stone-700 font-semibold">
                        <div className="text-lg font-semibold text-center flex items-center justify-center space-x-2">
                            <GiLaurelCrown />
                            <p>Player Records</p>
                        </div>
                        <div className="text-md text-left">ID : {info.id}</div>
                        <div className="text-md text-left">Wins : {info.wins}</div>
                        <div className="text-md text-left">Losses : {info.losses}</div>
                    </div>
                    <div className="text-white space-y-1 rounded-xl p-6 bg-stone-700 font-semibold">
                        <div>
                            <h4 className="text-xl font-semibold text-center">
                                Story Progression
                            </h4>
                            <h5 className="text-md text-left text-lg font-semibold">{storybg.name}</h5>
                        </div>
                        <div className="flex justify-center items-center space-x-4">
                            <motion.div className="h-64" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                                <img
                                    src={storybg.bg}
                                    alt={storybg.name}
                                    className="object-scale-down w-full h-full rounded-xl"
                                />
                            </motion.div>
                            <div className="text-white flex flex-col space-y-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 p-2 rounded-xl">
                                <div>
                                    <h4 className="text-md font-semibold text-center">
                                        The Journey Through Altreisha!
                                    </h4>
                                </div>
                                <div className="flex self-center bg-red-500 rounded-xl">
                                    <StaticCard id="32" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
