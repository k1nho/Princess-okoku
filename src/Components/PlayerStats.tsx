import usePlayerStore from "../store/store";
import { GiSpellBook, GiTreasureMap, GiCogLock, GiMagicGate, GiClawHammer, GiIdCard, GiLaurelCrown } from "react-icons/gi";
import { IoIosStats } from "react-icons/io"
import { DeckDisplay } from "./DeckDisplay";
import { StaticCard } from "./StaticCard";

export const PlayerStats: React.FC = () => {
    const [info, level, setGameMode] = usePlayerStore((state) => [state.info, state.level, state.setGameMode]);
    return (
        <div className="min-h-screen flex justify-around items-center space-x-2">
            <div className="flex flex-col justify-center items-center bg-stone-900 space-y-4 p-4 rounded-xl">
                <div>
                    <h4 className="text-white text-xl font-semibold">
                        Okoku Center
                    </h4>
                </div>
                <div className="flex justify-center items-center space-x-4">
                    <button className="flex items-center space-x-2 bg-stone-600 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white" onClick={() => setGameMode("Battle")}>
                        <GiTreasureMap />
                        <p>Continue</p>
                    </button>
                    <button className="flex items-center space-x-2 bg-stone-600 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white" onClick={() => setGameMode("Story")}>
                        <GiSpellBook />
                        <p>Read Story</p>
                    </button>
                    <button className="flex items-center space-x-2 bg-stone-600 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white" onClick={() => setGameMode("Learn")}>
                        <GiCogLock />
                        <p>Learn</p>
                    </button>
                    <button className="flex items-center space-x-2 bg-stone-600 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white" onClick={() => setGameMode("Learn")}>
                        <GiMagicGate />
                        <p>Change Deck</p>
                    </button>
                </div>

                <div>
                    <h4 className="text-xl text-white font-semibold text-center">Your Deck</h4>
                    <DeckDisplay />
                </div>
            </div>

            <div className="space-y-10">
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
                            <GiClawHammer />
                            <p>Coming Soon...</p>
                        </button>
                    </div>
                    <div className="text-white space-y-1 rounded-xl p-2 bg-stone-600">
                        <div className="text-lg font-semibold text-center flex items-center justify-center space-x-2">
                            <GiLaurelCrown />
                            <p>
                                Player Records
                            </p>
                        </div>
                        <div className="text-md text-left">ID : {info.id}</div>
                        <div className="text-md text-left">Wins : {info.wins}</div>
                        <div className="text-md text-left">Losses : {info.losses}</div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-center">Story Progression</h4>
                        <h5 className="text-md text-left">Level: {level}</h5>
                    </div>
                </div>
                <div className="flex flex-col justify-center bg-stone-900 space-y-4 p-6 rounded-xl">
                    <div>
                        <h4 className="text-white text-xl font-semibold text-center">
                            Settings
                        </h4>
                    </div>
                    <div className="flex justify-center items-center space-x-4">
                        <button className="flex items-center space-x-2 bg-stone-600 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white">
                            <GiTreasureMap />
                            <p>Favorite Card</p>
                        </button>
                        <button className="flex items-center space-x-2 bg-stone-600 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white">
                            <GiClawHammer />
                            <p>Coming Soon...</p>
                        </button>
                        <button className="flex items-center space-x-2 bg-stone-600 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white">
                            <GiClawHammer />
                            <p>Coming Soon...</p>
                        </button>
                    </div>
                    <div className="text-white flex flex-col space-y-4">
                        <div>
                            <h4 className="text-xl font-semibold text-center">The Journey Through Altreisha!</h4>
                        </div>
                        <div className="flex self-center bg-red-500 rounded-xl">
                            <StaticCard id="32" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
