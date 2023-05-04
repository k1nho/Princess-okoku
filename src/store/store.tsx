import { create } from "zustand";
import { BattleInfo, Card, PlayerInfo } from "./types";
import { v4 as uuidv4 } from "uuid"
import { CardPool } from "./cardpool"

const playerid = uuidv4()


interface PlayerStore {
    owned: Card[]
    deck: Card[]
    info: PlayerInfo
    level: number
    cardsCollected: number
    gameMode: string
    battleInfo: BattleInfo
    enemyBattleInfo: BattleInfo
    setGameMode: (mode: string) => void
    setName: (name: string) => void
    setWins: () => void
    setLosses: () => void
    setLevel: () => void
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
    owned: [],
    deck: [],
    info: initialInfo,
    battleInfo: initialBattleInfo,
    enemyBattleInfo: initialBattleInfo,
    gameMode: "MainMenu",
    level: 0,
    cardsCollected: 0
}

const cardPlaceholder: Card = {
    id: "none",
    name: "",
    atk: 1,
    def: 1,
    cost: 1,
    special: ""
}

const isnewCard = (id: string, owned: Card[]) => {
    owned.forEach((card) => {
        if (card.id === id) {
            return 0
        }
    })
    return 1
}

const getCard = (id: string): Card => {
    CardPool.forEach((card) => {
        if (card.id === id) {
            return card
        }
    });
    return cardPlaceholder

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
}));

export default usePlayerStore;
