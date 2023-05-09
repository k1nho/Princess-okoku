import { CardControls } from "./CardControls"
import { PlayField } from "./PlayField"
import { EplayField } from "./EPlayField"
import usePlayerStore from "../store/store"
import { GiCrown } from "react-icons/gi"
import { ComputerControls } from "./ComputerControls"

const storybgs = [
    { bg: "src/assets/bgs/stage_machina_world.png", name: "Machina Kingdom" },
    { bg: "src/assets/bgs/stage_dragon_den.png", name: "Dragon's Den" },
    { bg: "src/assets/bgs/stage_road_to_starry.png", name: "Road To Starry" },
    { bg: "src/assets/bgs/stage_cosmos.png", name: "Uverworld" },
];


export const Board: React.FC = () => {

    const [winCond, setWinCond, turn, setGameMode, finishBattle, level, setLevel, owned, setToOwned, getOwned] = usePlayerStore((state) => [state.battleWinCond, state.setWinCond, state.turn, state.setGameMode, state.finishBattle, state.level, state.setLevel, state.owned, state.setOwned, state.getOwned])

    const handleVictory = () => {
        finishBattle()
        setGameMode("Dashboard")
        setWinCond()
        setLevel()
        localStorage.setItem("po_level", ((level + 1) % 4).toString())
        if (!owned.includes(level)) setToOwned(level);
        localStorage.setItem("po_odecks", JSON.stringify(getOwned()))
    }

    const storybg = (level <= 3 && level >= 0) ? storybgs[level] : storybgs[0];

    if (winCond) {
        return (
            <div className="flex flex-col justify-center items-center">
                <div>
                    <h1 className="font-bold text-4xl">Victory</h1>
                </div>
                <button className="flex items-center space-x-2 bg-pink-400 rounded-full px-4 py-2 hover:bg-pink-600 transition ease-in-out duration-700 text-white" onClick={handleVictory}>

                    <GiCrown />
                    <p>Dashboard</p>
                </button>

            </div>
        )
    }

    return (
        <div className="flex-col relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${storybg.bg})` }}>
            <div className="absolute top-0 left-4 p-4">
                <EplayField />
            </div>
            <div className="absolute right-10 top-10 p-4">
                <ComputerControls />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className=" text-4xl text-bold p-4 text-white rounded-xl bg-gradient-to-r from-purple-400 to-pink-600 ">
                    Turn {turn}
                </div>
            </div>
            <div className="absolute bottom-0 right-4 p-4 flex">
                <PlayField />
            </div>
            <div className="absolute left-10 bottom-10 p-4">
                <CardControls />
            </div>
        </div>
    )
} 
