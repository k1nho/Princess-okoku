import { CardControls } from "./CardControls"
import { PlayField } from "./PlayField"

export const Board: React.FC = () => {
    return (
        <div className="flex-col relative h-screen">
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
