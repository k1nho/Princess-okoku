import usePlayerStore from "../store/store"
import { Card } from "./Card"
import { GiCardDraw, GiFlyingFlag } from "react-icons/gi"

export const CardControls: React.FC = () => {
    const [handCards, prepareDraw, addCardToHand, setGameMode, finishBattle] = usePlayerStore((state) => [state.battleInfo.handCards, state.prepareDraw, state.addCardToHand, state.setGameMode, state.finishBattle])

    const handleDrawCard = () => {
        prepareDraw();
        addCardToHand();
    }

    const handleQuitBattle = () => {
        finishBattle()
        setGameMode("Dashboard")
    }
    return (
        <div className="flex gap-8">
            {handCards.map((card) => {
                return card ? <Card key={card.id} id={card.id} /> : null
            })}

            <button
                className=" flex items-center space-x-2 bg-stone-900 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700"
                onClick={handleDrawCard}
            >
                <GiCardDraw />
                <p>Draw</p>
            </button>
            <button
                className=" flex items-center space-x-2 bg-red-500 rounded-full px-4 py-2 hover:bg-red-400 transition ease-in-out duration-700 text-white text-lg"
                onClick={handleQuitBattle}
            >
                <GiFlyingFlag />
                <p>Quit</p>
            </button>
        </div>
    )
}
