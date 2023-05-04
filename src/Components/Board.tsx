import { CardControls } from "./CardControls"
import { PlayField } from "./PlayField"
import ice_moon from "../assets/bgs/stage_ice_moon.png"
import machina_world from "../assets/bgs/state_machina_world.png"
import space_vortex from "../assets/bgs/state_space_vortex.png"

export const Board: React.FC = () => {
    return (
        <div className="flex-col relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${space_vortex})` }}>
            <div className="absolute top-4 left-4 p-4">
                <PlayField isEnemyField={true}></PlayField>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className=" text-4xl text-bold p-4">
                    Turn
                </div>
            </div>
            <div className="absolute bottom-4 right-4 p-4 flex">
                <PlayField isEnemyField={false}></PlayField>
            </div>
            <div className="absolute left-10 bottom-10 p-4">
                <CardControls />
            </div>
        </div>
    )
} 
