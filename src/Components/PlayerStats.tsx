import usePlayerStore from "../store/store";
import { GiSpellBook, GiTreasureMap, GiCogLock } from "react-icons/gi";

export const PlayerStats: React.FC = () => {
    const [info, setGameMode] = usePlayerStore((state) => [state.info, state.setGameMode]);
    return (
        <div className="min-h-screen bg-gray-100 flex justify-around items-center space-x-2">
            <div className="flex flex-col justify-center items-center rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                <div>
                    <h4 className="text-white text-xl font-semibold">
                        Story Progress
                    </h4>
                </div>
                <div className="space-y-2">
                    <button className="flex items-center space-x-2 bg-stone-900 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white" onClick={() => setGameMode("Battle")}>
                        <p>Continue</p>
                        <GiTreasureMap />
                    </button>
                    <button className="flex items-center space-x-2 bg-stone-900 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white" onClick={() => setGameMode("Story")}>
                        <p>Read Story</p>
                        <GiSpellBook />
                    </button>
                    <button className="flex items-center space-x-2 bg-stone-900 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white" onClick={() => setGameMode("Learn")}>
                        <p>Learn</p>
                        <GiCogLock />
                    </button>


                </div>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
                <div className="text-white text-xl font-semibold">
                    <h4>Player Card</h4>
                </div>
                <div className="flex flex-col items center justify-center">
                    <div>id :{info.id}</div>
                    <div>Wins: {info.wins}</div>
                    <div>Losses: {info.losses}</div>
                </div>
            </div>
        </div>
    );
};
