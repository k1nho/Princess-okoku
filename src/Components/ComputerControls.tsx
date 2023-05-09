import { useEffect } from "react";
import usePlayerStore from "../store/store";
import { CardPlaceholder } from "./CardPlaceholder";

export const ComputerControls: React.FC = () => {
    const [handCards, playedCards, userPlayedCards, gamePhase, setGamePhase, setWinCond, prepareDraw, addCardToHand, removeCardFromHand, addCardToEPlay, energy, setEnemyEnergy, attackCard, attackLp, setTurn, resetEnergy, getEPlayedCards, getUPlayedCards] =
        usePlayerStore((state) => [
            state.enemyBattleInfo.handCards,
            state.enemyBattleInfo.playedCards,
            state.battleInfo.playedCards,
            state.gamePhase,
            state.setGamePhase,
            state.setWinCond,
            state.prepareEDraw,
            state.addCardToEHand,
            state.removeECardFromHand,
            state.addCardToEPlay,
            state.enemyBattleInfo.energy,
            state.setEnemyEnergy,
            state.attackCard,
            state.attacklp,
            state.setTurn,
            state.resetEnergy,
            state.getEPlayedCards,
            state.getPlayedCards
        ]);

    useEffect(() => {
        const validHandCards = handCards.reduce((acc, val) => {
            if (val !== null) return acc + 1;
            return acc;
        }, 0);

        const validPlayCards = playedCards.reduce((acc, val) => {
            if (val !== null) return acc + 1;
            return acc
        }, 0)

        const computerPlay = () => {
            // DRAW STEP
            const idxRemove = Math.floor(Math.random() * 5)
            if (validHandCards === 5) {
                const selectedCard = handCards[idxRemove];
                if (selectedCard !== null) removeCardFromHand(selectedCard.id);
            }
            prepareDraw()
            addCardToHand()

            // INVOKE STEP
            if (validPlayCards < 8) {
                const idx = playedCards.indexOf(null)
                if (idx !== -1) {
                    for (let i = 0; i < handCards.length; i++) {
                        const eCard = handCards[i];
                        if (eCard !== null && eCard !== undefined && energy - eCard.cost >= 0) {
                            removeCardFromHand(eCard.id)
                            addCardToEPlay(idx, eCard)
                            setEnemyEnergy(eCard.cost)
                        }
                    }
                }
            }

            // ATTACK STEP
            const pCards = getEPlayedCards();
            for (let i = 0; i < pCards.length; i++) {
                const eCard = pCards[i];
                if (eCard === null) continue;
                const uCards = getUPlayedCards();
                const uIdx = uCards.findIndex((card) => card !== null)
                if (uIdx === -1) {
                    attackLp(eCard.atk)
                }
                else {
                    const uCard = uCards[uIdx]
                    if (uCard !== null) attackCard(uCard, eCard)
                }
            }

            // END STEP
            resetEnergy()
            setTurn()
            setGamePhase("Draw")
            setWinCond()
        }

        if (gamePhase === "EDraw") {
            computerPlay()
        }
    }, [gamePhase, handCards, addCardToHand, prepareDraw, removeCardFromHand, setGamePhase, setWinCond, resetEnergy, setTurn, addCardToEPlay, attackCard, attackLp, energy, playedCards, setEnemyEnergy, userPlayedCards, getEPlayedCards, getUPlayedCards])

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
