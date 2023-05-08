import { useEffect } from "react";
import usePlayerStore from "../store/store";
import { CardPlaceholder } from "./CardPlaceholder";

export const ComputerControls: React.FC = () => {
    const [handCards, gamePhase, setGamePhase, setWinCond, prepareDraw, addCardToHand, removeCardFromHand, setTurn, resetEnergy] =
        usePlayerStore((state) => [
            state.enemyBattleInfo.handCards,
            state.gamePhase,
            state.setGamePhase,
            state.setWinCond,
            state.prepareEDraw,
            state.addCardToEHand,
            state.removeECardFromHand,
            state.setTurn,
            state.resetEnergy
        ]);

    useEffect(() => {
        const validCards = handCards.reduce((acc, val) => {
            if (val !== null) return acc + 1;
            return acc;
        }, 0);

        const computerPlay = () => {
            // DRAW STEP
            const idxRemove = Math.floor(Math.random() * 5)
            if (validCards === 5) {
                const selectedCard = handCards[idxRemove];
                if (selectedCard !== null) removeCardFromHand(selectedCard.id);
            }
            prepareDraw()
            addCardToHand()

            // INVOKE STEP
            // ATTACK STEP
            // END STEP
            resetEnergy()
            setTurn()
            setGamePhase("Draw")
            setWinCond()
        }

        if (gamePhase === "EDraw") {
            computerPlay()
        }
    }, [gamePhase, handCards, addCardToHand, prepareDraw, removeCardFromHand, setGamePhase, setWinCond, resetEnergy, setTurn])

    return (
        <div className="flex gap-8">
            <div className="flex items-center space-x-2">
                {handCards.map((card) => {
                    return card ? <CardPlaceholder key={card.id} /> : null;
                })}
            </div>
        </div>
    );
}
