import { CardControls } from "./CardControls"
import { PlayField } from "./PlayField"
import space_vortex from "../assets/bgs/state_space_vortex.png"
import cosmos from "../assets/bgs/stage_cosmos.png"

export const Board: React.FC = () => {
    return (
        <div className="flex-col relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${cosmos})` }}>
            <div className="absolute top-0 left-4 p-4">
                <PlayField isEnemyField={true}></PlayField>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className=" text-4xl text-bold p-4">
                    Turn
                </div>
            </div>
            <div className="absolute bottom-0 right-4 p-4 flex">
                <PlayField isEnemyField={false}></PlayField>
            </div>
            <div className="absolute left-10 bottom-10 p-4">
                <CardControls />
            </div>
        </div>
    )
} 
