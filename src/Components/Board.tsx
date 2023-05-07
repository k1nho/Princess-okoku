import { CardControls } from "./CardControls"
import { PlayField } from "./PlayField"
import cosmos from "../assets/bgs/stage_cosmos.png"
import { EplayField } from "./EPlayField"
import usePlayerStore from "../store/store"

export const Board: React.FC = () => {

    const [checkWinCond] = usePlayerStore((state) => [state.battleWinCond])

    if (checkWinCond) {
        return (
            <div>
                victory
            </div>
        )
    }

    return (
        <div className="flex-col relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${cosmos})` }}>
            <div className="absolute top-0 left-4 p-4">
                <EplayField />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className=" text-4xl text-bold p-4 text-white rounded-xl bg-gradient-to-r from-purple-400 to-pink-600 ">
                    Turn
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
