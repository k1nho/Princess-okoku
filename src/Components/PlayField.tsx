import usePlayerStore from "../store/store";
import { Card } from "./Card";
import { GiCrownedHeart, GiRollingEnergy } from "react-icons/gi"


export const PlayField: React.FC = () => {
    const [playedCards, lp, energy] = usePlayerStore((state) => [state.battleInfo.playedCards, state.battleInfo.lp, state.battleInfo.energy])

    return (
        <div className="flex flex-col justify-center items-center space-y-5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-7 rounded-lg">
            <div className="flex justify-center items-center space-x-4">
                <div className=" flex items-center space-x-2 bg-green-700 rounded-full px-4 py-2 hover:bg-green-800 transition ease-in-out duration-700 text-white text-lg" >
                    <GiCrownedHeart />
                    <p>
                        {lp}
                    </p>
                </div>
                <div className=" flex items-center space-x-2 bg-sky-800 rounded-full px-4 py-2 hover:bg-sky-900 transition ease-in-out duration-700 text-white text-lg" >
                    <GiRollingEnergy />
                    <p>
                        {energy}
                    </p>
                </div>
            </div>
            <div id="invocation-zone" className="grid grid-cols-4 gap-10">
                {playedCards.map((card) => {
                    return card ? <Card key={card.id} id={card.id} atkmode={true} /> : null
                })}
            </div>
        </div>

    );
};
