import { create } from "zustand";
import { BattleInfo, Card, PlayerInfo } from "./types";
import { v4 as uuidv4 } from "uuid";
import { cardpool } from "./cardpool";

const playerid = uuidv4();

interface PlayerStore {
    tutorial: boolean;
    owned: number[];
    deck: Card[];
    info: PlayerInfo;
    level: number;
    cardsCollected: number;
    gameMode: string;
    battleInfo: BattleInfo;
    enemyBattleInfo: BattleInfo;
    battleWinCond: boolean;
    setTutorial: () => void;
    setGameMode: (mode: string) => void;
    setName: (name: string) => void;
    setWins: () => void;
    setLosses: () => void;
    setLevel: () => void;
    setDeck: (l: number, r: number) => void;
    setBattleDeck: () => void;
    addCardToDeck: (id: string) => void;
    removeCardfromDeck: (id: string) => void;
    prepareDraw: () => void;
    addCardToHand: () => void;
    removeCardFromHand: () => void;
    addCardToPlay: (pos: number) => void;
    removeCardFromPlay: () => void;
    setWinCond: () => void;
    finishBattle: () => void;
}

const placeholder = cardpool[0];

const initialInfo: PlayerInfo = {
    id: playerid,
    name: "Kaede",
    wins: 0,
    losses: 0,
};

const initialBattleInfo: BattleInfo = {
    deck: [],
    drawPos: 12,
    handCards: [null, null, null, null, null],
    playedCards: [null, null, null, null, null, null, null, null],
    lp: 10,
    energy: 1,
};

export const getCard = (id: string): Card => {
    let res = cardpool[0];
    for (let i = 0; i < cardpool.length; i++) {
        if (cardpool[i].id === id) {
            res = cardpool[i];
            break;
        }
    }
    return res;
};

const getDeck = (l: number, r: number): Card[] => {
    return cardpool.slice(l, r);
};

const removeCard = (id: string, deck: Card[]): Card[] => {
    const cards = deck;
    return cards.filter((card) => card.id !== id);
};

const returnBounds = (): [boolean, number, number] => {
    let l = -1;
    let r = -1;
    const storedl = localStorage.getItem("playerdeckl");
    const storedr = localStorage.getItem("playerdeckr");
    if (storedl !== null && storedr !== null) {
        l = parseInt(storedl, 10);
        r = parseInt(storedr, 10);
        return [true, l, r];
    } else return [false, l, r];
};

const cachedDeck = returnBounds();

const startGame = {
    tutorial: localStorage.getItem("isTutorial") ? false : true,
    owned: [],
    deck: cachedDeck[0] ? getDeck(cachedDeck[1], cachedDeck[2]) : [],
    info: initialInfo,
    battleInfo: initialBattleInfo,
    enemyBattleInfo: initialBattleInfo,
    battleWinCond: false,
    gameMode: "MainMenu",
    level: 0,
    cardsCollected: 0,
};

/* BATTLE MECHANICS */
const draw = (deck: Card[], cardsInHand: (Card | null)[], drawPos: number) => {
    const rp = cardsInHand.indexOf(null)
    console.log(rp)
    console.log(cardsInHand)
    console.log(drawPos)
    console.log(deck)
    console.log(deck[drawPos])
    if (drawPos < 0) return cardsInHand;
    console.log([...cardsInHand.slice(0, rp), deck[drawPos], ...cardsInHand.slice(rp + 1)])
    return [...cardsInHand.slice(0, rp), deck[drawPos], ...cardsInHand.slice(rp + 1)]

};

const removeCardFromHand = (cardsInHand: (Card | null)[], idx: string) => {
    return cardsInHand.filter((card) => {
        if (card === null) return true;
        return card.id !== idx;
    });
};

const addCardToPlay = (cardsInPlay: (Card | null)[], card: Card, pos: number) => {
    const field = cardsInPlay;
    field[pos] = card;
    return field;
};

const removeCardFromPlay = (cardsInPlay: (Card | null)[], idx: string) => {
    return cardsInPlay.filter((card) => {
        if (card === null) return true;
        return card.id !== idx;
    });
};

const checkWinCond = (
    lp: number,
    elp: number,
    decksize: number,
    edecksize: number
): boolean => {
    if (lp <= 0 || elp <= 0 || decksize === 0 || edecksize === 0) return true;
    return false;
};

const usePlayerStore = create<PlayerStore>()((set) => ({
    ...startGame,
    setGameMode: (mode: string) => set(() => ({ gameMode: mode })),
    setName: (name: string) =>
        set((state) => ({ info: { ...state.info, name: name } })),
    setWins: () =>
        set((state) => ({ info: { ...state.info, wins: state.info.wins + 1 } })),
    setLosses: () =>
        set((state) => ({
            info: { ...state.info, losses: state.info.losses + 1 },
        })),
    setLevel: () =>
        set((state) => ({
            info: { ...state.info },
            level: state.level < 100 ? state.level + 1 : state.level,
        })),
    addCardToDeck: (id: string) =>
        set((state) => ({ deck: [...state.deck, getCard(id)] })),
    removeCardfromDeck: (id: string) =>
        set((state) => ({ deck: removeCard(id, state.deck) })),
    setTutorial: () => set(() => ({ tutorial: false })),
    setDeck: (l: number, r: number) =>
        set((state) => ({
            deck: getDeck(l, r),
            battleInfo: { ...state.battleInfo, deck: getDeck(l, r) },
        })),
    setBattleDeck: () => set((state) => ({ battleInfo: { ...state.battleInfo, deck: state.deck } })),
    prepareDraw: () => set((state) => ({ battleInfo: { ...state.battleInfo, drawPos: state.battleInfo.drawPos - 1 } })),
    addCardToHand: () =>
        set((state) => ({
            battleInfo: {
                ...state.battleInfo,
                handCards: draw(state.battleInfo.deck, state.battleInfo.handCards, state.battleInfo.drawPos),
            },
        })),
    removeCardFromHand: () =>
        set((state) => ({
            battleInfo: {
                ...state.battleInfo,
                handCards: removeCardFromHand(state.battleInfo.handCards, "1"),
            },
        })),
    addCardToPlay: (pos: number) =>
        set((state) => ({
            battleInfo: {
                ...state.battleInfo,
                playedCards: addCardToPlay(state.battleInfo.playedCards, placeholder, pos),
            },
        })),
    removeCardFromPlay: () =>
        set((state) => ({
            battleInfo: {
                ...state.battleInfo,
                playedCards: removeCardFromPlay(state.battleInfo.playedCards, "1"),
            },
        })),
    setWinCond: () =>
        set((state) => ({
            battleWinCond: checkWinCond(
                state.battleInfo.lp,
                state.enemyBattleInfo.lp,
                state.battleInfo.deck.length,
                state.enemyBattleInfo.deck.length
            ),
        })),
    finishBattle: () => set((state) => ({
        battleInfo: {
            deck: state.deck,
            handCards: [null, null, null, null, null],
            drawPos: 12,
            playedCards: [null, null, null, null, null, null, null, null],
            lp: 10,
            energy: 1,
        },
        enemyBattleInfo: {
            deck: state.enemyBattleInfo.deck,
            handCards: [null, null, null, null, null],
            drawPos: 12,
            playedCards: [null, null, null, null, null, null, null, null],
            lp: 10,
            energy: 1,

        }
    }))
}));

export default usePlayerStore;
