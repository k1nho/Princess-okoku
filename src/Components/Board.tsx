import { CardControls } from "./CardControls";
import { PlayField } from "./PlayField";
import { EplayField } from "./EPlayField";
import usePlayerStore from "../store/store";
import { GiCrown } from "react-icons/gi";
import { FaCrown } from "react-icons/fa";
import { ComputerControls } from "./ComputerControls";
import machinabg from "../assets/bgs/stage_machina_world.png"
import dragonbg from "../assets/bgs/stage_dragon_den.png"
import fairybg from "../assets/bgs/stage_road_to_starry.png"
import nebula from "../assets/bgs/bg_cosmos.png"

const storybgs = [
    { bg: machinabg, name: "Machina Kingdom" },
    { bg: dragonbg, name: "Dragon's Den" },
    { bg: fairybg, name: "Road To Starry" },
    { bg: nebula, name: "FelinePaw Nebula" },
];

export const Board: React.FC = () => {
    const [
        winCond,
        setWinCond,
        turn,
        setGameMode,
        finishBattle,
        level,
        setLevel,
        owned,
        setToOwned,
        getOwned,
        uDrawPos,
        uLp,
        setWins,
        setLosses,
        info,
    ] = usePlayerStore((state) => [
        state.battleWinCond,
        state.setWinCond,
        state.turn,
        state.setGameMode,
        state.finishBattle,
        state.level,
        state.setLevel,
        state.owned,
        state.setOwned,
        state.getOwned,
        state.battleInfo.drawPos,
        state.battleInfo.lp,
        state.setWins,
        state.setLosses,
        state.info,
    ]);

    const handleVictory = () => {
        if (uLp <= 0 || uDrawPos < 0) {
            setLosses();
            localStorage.setItem("po_losses", (info.losses + 1).toString());
        } else {
            setWins();
            localStorage.setItem("po_wins", (info.wins + 1).toString());
        }
        finishBattle();
        setGameMode("Dashboard");
        setWinCond();
        setLevel();
        localStorage.setItem("po_level", (level + 1).toString());
        if (!owned.includes((level + 1) % 4)) setToOwned((level + 1) % 4);
        localStorage.setItem("po_odecks", JSON.stringify(getOwned()));
    };

    const storybg = storybgs[level % 4];

    if (winCond) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                <div className="flex flex-col justify-center items-center space-y-4 rounded-xl bg-stone-900 p-10">
                    {uLp <= 0 || uDrawPos < 0 ? (
                        <>
                            <h1 className="font-bold text-7xl text-red-500 text-center">
                                Defeat
                            </h1>
                        </>
                    ) : (
                        <div className="flex justify-center items-center text-8xl space-x-4 text-yellow-500">
                            <div>
                                <FaCrown />
                            </div>
                            <div>
                                <h1 className="font-bold text-7xl text-yellow-500 text-center">
                                    Victory
                                </h1>
                            </div>
                            <div>
                                <FaCrown />
                            </div>
                        </div>
                    )}
                    <button
                        className="flex items-center space-x-2 bg-stone-700 rounded-full px-4 py-2 hover:bg-stone-500 transition ease-in-out duration-700 text-white"
                        onClick={handleVictory}
                    >
                        <GiCrown />
                        <p>Dashboard</p>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            className="flex-col relative h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${storybg.bg})` }}
        >
            <div className="absolute top-0 left-4 p-4">
                <EplayField />
            </div>
            <div className="absolute right-10 top-10 p-4">
                <ComputerControls />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-bold p-4 rounded-xl bg-stone-900">
                    <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text text-4xl">
                        Turn {turn}
                    </h1>
                </div>
            </div>
            <div className="absolute bottom-0 right-4 p-4 flex">
                <PlayField />
            </div>
            <div className="absolute left-10 bottom-10 p-4">
                <CardControls />
            </div>
        </div>
    );
};
