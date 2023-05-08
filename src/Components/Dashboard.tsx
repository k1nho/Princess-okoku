import usePlayerStore from "../store/store";
import { RiSwordFill } from "react-icons/ri";
import { GiExitDoor, GiQueenCrown } from "react-icons/gi";
import { TutorialDashboard } from "./Tutorials/TutorialDashBoard";
import { PlayerStats } from "./PlayerStats";

export const Dashboard: React.FC = () => {
    const [tutorial, setGameMode, setBattleDeck, setEBattleDeck, setFirstRoundHand, level, playerName] = usePlayerStore((state) => [
        state.tutorial,
        state.setGameMode,
        state.setBattleDeck,
        state.setEBattleDeck,
        state.setFirstRoundHand,
        state.level,
        state.info.name,
    ]);

    const handleExplore = () => {
        setBattleDeck()
        setEBattleDeck()
        setFirstRoundHand()
        setGameMode("Battle")
    }

    return (
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                <div className="flex justify-between md:justify-around mx-auto w-10/12 py-4 text-white">
                    <div className="flex justify-center items-center space-x-2">
                        <div className="text-3xl">
                            <GiQueenCrown />
                        </div>
                        <h1 className="text-2xl md:text-3xl transition duration-200 focus:outline-none font-semibold">
                            Princess Okoku
                        </h1>
                    </div>
                    <div className="flex items-center justify-center font-semibold text-base space-x-10 py-1">
                        <div className="">{playerName}</div>
                        <div className="">Level {level}</div>
                        {!tutorial &&
                            <button
                                className=" flex items-center space-x-2 bg-stone-900 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700"
                                onClick={handleExplore}
                            >
                                <p>Explore</p>
                                <RiSwordFill />
                            </button>

                        }
                        <button className="text-xl" onClick={() => setGameMode("MainMenu")}>
                            <GiExitDoor />
                        </button>
                    </div>
                </div>
            </div>
            {tutorial ? <TutorialDashboard /> : <PlayerStats />}
        </div>
    );
};
