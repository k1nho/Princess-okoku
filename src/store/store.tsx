import { create } from "zustand";
import { Card, PlayerInfo } from "./types";
import { v4 as uuidv4 } from "uuid"

const playerid = uuidv4()


interface PlayerStore {
    owned: Card[]
    deck: Card[]
    info: PlayerInfo
    level: number
    cardsCollected: number
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

const startGame = {
    owned: [],
    deck: [],
    info: initialInfo,
    level: 0,
    cardsCollected: 0
}

const CardPlaceholder: Card = {
    id: "123",
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
    let res = CardPlaceholder
    CardPool.forEach((card) => {
        if (card.id === id) {
            res = card;
        }
    });

    return res;
}

const removeCard = (id: string, deck: Card[]): Card[] => {
    const cards = deck
    return cards.filter((card) => card.id !== id);
}


const usePlayerStore = create<PlayerStore>()((set) => ({
    ...startGame,
    setName: (name: string) => set((state) => ({ info: { ...state.info, name: name } })),
    setWins: () => set((state) => ({ info: { ...state.info, wins: state.info.wins + 1 } })),
    setLosses: () => set((state) => ({ info: { ...state.info, losses: state.info.losses + 1 } })),
    setLevel: () => set((state) => ({ info: { ...state.info }, level: state.level < 100 ? state.level + 1 : state.level })),
    setCardsCollected: (id: string) => set((state) => ({ info: { ...state.info }, cardsCollected: state.cardsCollected + isnewCard(id, state.owned) })),
    addCardToOwned: (id: string) => set((state) => ({ owned: [...state.owned, getCard(id)] })),
    addCardToDeck: (id: string) => set((state) => ({ deck: [...state.deck, getCard(id)] })),
    removeCardfromDeck: (id: string) => set((state) => ({ deck: removeCard(id, state.deck) }))
}));

export default usePlayerStore;
