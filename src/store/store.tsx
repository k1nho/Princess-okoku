import { create } from "zustand";
import { BattleInfo, Card, PlayerInfo } from "./types";
import { v4 as uuidv4 } from "uuid"
import { cardpool } from "./cardpool"

const playerid = uuidv4()


interface PlayerStore {
    tutorial: boolean
    owned: Card[]
    deck: Card[]
    info: PlayerInfo
    level: number
    cardsCollected: number
    gameMode: string
    battleInfo: BattleInfo
    enemyBattleInfo: BattleInfo
    setTutorial: () => void
    setGameMode: (mode: string) => void
    setName: (name: string) => void
    setWins: () => void
    setLosses: () => void
    setLevel: () => void
    setDeck: (l: number, r: number) => void
    setCardsCollected: (id: string) => void
    addCardToOwned: (id: string) => void;
    addCardToDeck: (id: string) => void;
    removeCardfromDeck: (id: string) => void;
}

const initialInfo: PlayerInfo = {
    id: playerid,
    name: "Kaede",
    wins: 0,
    losses: 0
}

const initialBattleInfo: BattleInfo = {
    deck: [],
    handCards: [],
    playedCards: [],
    lp: 10,
    energy: 1
}


const startGame = {
    tutorial: localStorage.getItem("isTutorial") ? false : true,
    owned: [],
    deck: [],
    info: initialInfo,
    battleInfo: initialBattleInfo,
    enemyBattleInfo: initialBattleInfo,
    gameMode: "MainMenu",
    level: 0,
    cardsCollected: 0
}

const cardPlaceholder = cardpool[0]

const isnewCard = (id: string, owned: Card[]) => {
    owned.forEach((card) => {
        if (card.id === id) {
            return 0
        }
    })
    return 1
}

export const getCard = (id: string): Card => {
    let res = cardPlaceholder
    for (let i = 0; i < cardpool.length; i++) {
        if (cardpool[i].id === id) {
            res = cardpool[i];
            break;
        }
    }

    return res

}

const getDeck = (l: number, r: number): Card[] => {
    return cardpool.slice(l, r)
}

const removeCard = (id: string, deck: Card[]): Card[] => {
    const cards = deck
    return cards.filter((card) => card.id !== id);
}




const usePlayerStore = create<PlayerStore>()((set) => ({
    ...startGame,
    setGameMode: (mode: string) => set(() => ({ gameMode: mode })),
    setName: (name: string) => set((state) => ({ info: { ...state.info, name: name } })),
    setWins: () => set((state) => ({ info: { ...state.info, wins: state.info.wins + 1 } })),
    setLosses: () => set((state) => ({ info: { ...state.info, losses: state.info.losses + 1 } })),
    setLevel: () => set((state) => ({ info: { ...state.info }, level: state.level < 100 ? state.level + 1 : state.level })),
    setCardsCollected: (id: string) => set((state) => ({ info: { ...state.info }, cardsCollected: state.cardsCollected + isnewCard(id, state.owned) })),
    addCardToOwned: (id: string) => set((state) => ({ owned: [...state.owned, getCard(id)] })),
    addCardToDeck: (id: string) => set((state) => ({ deck: [...state.deck, getCard(id)] })),
    removeCardfromDeck: (id: string) => set((state) => ({ deck: removeCard(id, state.deck) })),
    setTutorial: () => set(() => ({ tutorial: false })),
    setDeck: (l: number, r: number) => set(() => ({ deck: getDeck(l, r) })),
}));

export default usePlayerStore;
