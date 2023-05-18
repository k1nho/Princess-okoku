import usePlayerStore from "../store/store";
import {
    GiSpellBook,
    GiCogLock,
    GiMagicGate,
    GiRoundStar,
    GiIdCard,
    GiLaurelCrown,
    GiCancel,
    GiCardPickup
} from "react-icons/gi";
import { IoIosStats } from "react-icons/io";
import { DeckDisplay } from "./DeckDisplay";
import { StaticCard } from "./StaticCard";
import { motion } from "framer-motion";
import { useState } from "react";
import machinabg from "../assets/bgs/stage_machina_world.webp";
import dragonbg from "../assets/bgs/stage_dragon_den.webp";
import fairybg from "../assets/bgs/stage_road_to_starry.webp";
import nebula from "../assets/bgs/bg_cosmos.webp";
import { GachaCard } from "./GachaCard";

const storybgs = [
    { bg: machinabg, name: "Machina Kingdom", deckName: "Techno Princess" },
    { bg: dragonbg, name: "Dragon's Den", deckName: "Dragon Empire" },
    { bg: fairybg, name: "Road To Starry", deckName: "Spirit Fairies" },
    { bg: nebula, name: "FelinePaw Nebula", deckName: "Talking Cats" },
];

export const PlayerStats: React.FC = () => {
    const [
        info,
        level,
        setGameMode,
        setPermaDeck,
        ownedDecks,
        favoriteId,
        setFavoriteCard,
        cardCollection
    ] = usePlayerStore((state) => [
        state.info,
        state.level,
        state.setGameMode,
        state.setDeck,
        state.owned,
        state.favoriteCard,
        state.setFavoriteCard,
        state.cardsCollected
    ]);

    const [OpenDeckChoice, setOpenDeckChoice] = useState(false);
    const [openFavorite, setOpenFavorite] = useState(false);

    const handleFavoriteSelection = (deckId: string) => {
        setFavoriteCard(deckId);
        localStorage.setItem("po_fav", deckId)
    }

    const CardCollection = (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center z-10">
            <p className="text-lg font-bold text-white">Cards Collected ({`${cardCollection.length}/27`})</p>
            <div className="p-4 rounded-lg grid grid-cols-10 grid-rows-10 gap-2 bg-stone-900">
                {cardCollection.map((deckId) => (
                    <div key={deckId} className="flex flex-col justify-center items-center text-white" onClick={() => handleFavoriteSelection(deckId)}>
                        {deckId}
                        <GachaCard id={deckId} />
                    </div>
                ))}
            </div>
            <button
                className="px-4 py-2 rounded-md  text-white bg-red-500 hover:bg-red-400 focus:outline-none text-lg mt-2"
                onClick={() => setOpenFavorite(false)}
            >
                <GiCancel />
            </button>
        </div>
    );



    const changeDeck = (deckId: number) => {
        setPermaDeck(deckId);
        setOpenDeckChoice(false);
    };

    const storybg = storybgs[level % 4];

    const DeckChoice = (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center z-10">
            <p className="text-lg font-bold text-white">Deck to take on adventure:</p>
            <div className="p-4 rounded-lg grid grid-cols-4 grid-rows-1 gap-2 bg-stone-900">
                {ownedDecks.map((deckId) => (
                    <div
                        className="bg-stone-600 rounded-md px-4 py-2 hover:bg-stone-700 cursor-pointer text-lg flex justify-center"
                        key={deckId}
                        onClick={() => changeDeck(deckId)}
                    >
                        <button className="text-white focus:outline-none">
                            {storybgs[deckId].deckName}
                        </button>
                    </div>
                ))}
            </div>
            <button
                className="px-4 py-2 rounded-md  text-white bg-red-500 hover:bg-red-400 focus:outline-none text-lg mt-2"
                onClick={() => setOpenDeckChoice(false)}
            >
                <GiCancel />
            </button>
        </div>
    );

    return (
        <div className="min-h-screen flex justify-around items-center space-x-2">
            {OpenDeckChoice && DeckChoice}
            {openFavorite && CardCollection}
            <div className="flex flex-col justify-center items-center bg-stone-900 space-y-4 p-4 rounded-xl">
                <div>
                    <h4 className="text-white text-xl font-semibold">Okoku Center</h4>
                </div>
                <div className="flex justify-center items-center space-x-4">
                    <button
                        className="flex items-center space-x-2 bg-stone-600 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white"
                        onClick={() => setGameMode("Gacha")}
                    >
                        <GiCardPickup />
                        <p>Gacha</p>
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
                        <button className="flex items-center space-x-2 bg-stone-600 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white" onClick={() => setOpenFavorite(true)}>
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
                            <h5 className="text-md text-left text-lg font-semibold">
                                {storybg.name}
                            </h5>
                        </div>
                        <div className="flex justify-center items-center space-x-4">
                            <motion.div
                                className="h-64"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
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
                                    {favoriteId === "32" ? <StaticCard id="32" /> : <GachaCard id={favoriteId} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
