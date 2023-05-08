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
    turn: number;
    battleInfo: BattleInfo;
    enemyBattleInfo: BattleInfo;
    gamePhase: string;
    battleWinCond: boolean;
    setTutorial: () => void;
    setOwned: (deckId: number) => void;
    setGameMode: (mode: string) => void;
    setName: (name: string) => void;
    setWins: () => void;
    setLosses: () => void;
    setLevel: () => void;
    setTurn: () => void;
    setDeck: (l: number, r: number) => void;
    setBattleDeck: () => void;
    setEBattleDeck: () => void;
    setFirstRoundHand: () => void;
    setGamePhase: (phase: string) => void;
    prepareDraw: () => void;
    addCardToHand: () => void;
    removeCardFromHand: (id: string) => void;
    addCardToPlay: (pos: number, card: Card) => void;
    prepareEDraw: () => void;
    addCardToEHand: () => void;
    removeECardFromHand: (id: string) => void;
    addCardToEPlay: (pos: number, card: Card) => void;
    attackCard: (card: Card, eCard: Card) => void;
    attackElp: (atk: number) => void;
    attacklp: (atk: number) => void;
    setEnergy: (cost: number) => void;
    resetEnergy: () => void;
    setWinCond: () => void;
    finishBattle: () => void;
}

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

const getCollectedDecks = (ownedDecks: number[], deckId: number) => {
    return [...ownedDecks, deckId]
}


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
const storageLevel = localStorage.getItem("po_level")
const cacheLevel = (storageLevel !== null) ? parseInt(storageLevel, 10) : 0
const storageOwned = localStorage.getItem("po_odecks")
const cacheOwned = storageOwned !== null ? JSON.parse(storageOwned) : []

const startGame = {
    tutorial: localStorage.getItem("isTutorial") ? false : true,
    owned: cacheOwned,
    deck: cachedDeck[0] ? getDeck(cachedDeck[1], cachedDeck[2]) : [],
    info: initialInfo,
    turn: 1,
    battleInfo: initialBattleInfo,
    enemyBattleInfo: initialBattleInfo,
    gamePhase: "Draw",
    eGamePhase: "End",
    battleWinCond: false,
    gameMode: "MainMenu",
    level: cacheLevel,
    cardsCollected: 0,
};

/* BATTLE MECHANICS */
const shuffleDeck = (deck: Card[]): Card[] => {
    const deckcp = [...deck];
    for (let i = deckcp.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deckcp[i], deckcp[j]] = [deckcp[j], deckcp[i]];
    }
    return deckcp;
};

const setFirstRoundHand = (deck: Card[]) => {
    return [...deck.slice(8, 12), null];
};

const draw = (deck: Card[], cardsInHand: (Card | null)[], drawPos: number) => {
    const rp = cardsInHand.indexOf(null);
    if (drawPos < 0) return cardsInHand;
    return [
        ...cardsInHand.slice(0, rp),
        deck[drawPos],
        ...cardsInHand.slice(rp + 1),
    ];
};

const removeCardFromHand = (cardsInHand: (Card | null)[], idx: string) => {
    const cardsInHandNew = [];
    for (let i = 0; i < cardsInHand.length; i++) {
        if (cardsInHand[i] === null) cardsInHandNew.push(null);
        else if (cardsInHand[i]?.id === idx) cardsInHandNew.push(null);
        else cardsInHandNew.push(cardsInHand[i]);
    }
    return cardsInHandNew;
};

const addCardToPlay = (
    cardsInPlay: (Card | null)[],
    card: Card,
    pos: number
) => {
    const field = [...cardsInPlay];
    field[pos] = card;
    return field;
};

const takeDamage = (playedCards: (Card | null)[], card: Card, dmg: number) => {
    const pCards = [...playedCards];
    for (let i = 0; i < pCards.length; i++) {
        const match = pCards[i];
        if (match !== null && match.id === card.id) {
            match.def -= dmg;
            if (match.def <= 0) pCards[i] = null;
        }
    }
    return pCards;
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
            level: state.level < 3 ? state.level + 1 : state.level,
        })),
    setTutorial: () => set(() => ({ tutorial: false })),
    setOwned: (deckId: number) => set((state) => ({ owned: getCollectedDecks(state.owned, deckId) })),
    setTurn: () => set((state) => ({ turn: state.turn + 1 })),
    setDeck: (l: number, r: number) =>
        set((state) => ({
            deck: getDeck(l, r),
            battleInfo: { ...state.battleInfo, deck: getDeck(l, r) },
        })),
    setBattleDeck: () =>
        set((state) => ({
            battleInfo: { ...state.battleInfo, deck: shuffleDeck(state.deck) },
        })),
    setEBattleDeck: () =>
        set((state) => ({
            enemyBattleInfo: {
                ...state.enemyBattleInfo,
                deck: shuffleDeck(getDeck(12 * state.level, 12 * state.level + 12)),
            },
        })),
    setFirstRoundHand: () =>
        set((state) => ({
            battleInfo: {
                ...state.battleInfo,
                handCards: setFirstRoundHand(state.battleInfo.deck),
                drawPos: state.battleInfo.drawPos - 4,
            },
            enemyBattleInfo: {
                ...state.enemyBattleInfo,
                handCards: setFirstRoundHand(state.enemyBattleInfo.deck),
                drawPos: state.enemyBattleInfo.drawPos - 4,
            },
        })),
    setGamePhase: (phase: string) => set(() => ({ gamePhase: phase })),
    prepareDraw: () =>
        set((state) => ({
            battleInfo: {
                ...state.battleInfo,
                drawPos: state.battleInfo.drawPos - 1,
            },
        })),
    addCardToHand: () =>
        set((state) => ({
            battleInfo: {
                ...state.battleInfo,
                handCards: draw(
                    state.battleInfo.deck,
                    state.battleInfo.handCards,
                    state.battleInfo.drawPos
                ),
            },
        })),
    prepareEDraw: () =>
        set((state) => ({
            enemyBattleInfo: {
                ...state.enemyBattleInfo,
                drawPos: state.enemyBattleInfo.drawPos - 1,
            },
        })),
    addCardToEHand: () =>
        set((state) => ({
            enemyBattleInfo: {
                ...state.enemyBattleInfo,
                handCards: draw(
                    state.enemyBattleInfo.deck,
                    state.enemyBattleInfo.handCards,
                    state.enemyBattleInfo.drawPos
                ),
            },
        })),
    removeECardFromHand: (id: string) =>
        set((state) => ({
            enemyBattleInfo: {
                ...state.enemyBattleInfo,
                handCards: removeCardFromHand(state.enemyBattleInfo.handCards, id),
            },
        })),
    addCardToEPlay: (pos: number, card: Card) =>
        set((state) => ({
            enemyBattleInfo: {
                ...state.enemyBattleInfo,
                playedCards: addCardToPlay(
                    state.enemyBattleInfo.playedCards,
                    card,
                    pos
                ),
            },
        })),

    removeCardFromHand: (id: string) =>
        set((state) => ({
            battleInfo: {
                ...state.battleInfo,
                handCards: removeCardFromHand(state.battleInfo.handCards, id),
            },
        })),
    addCardToPlay: (pos: number, card: Card) =>
        set((state) => ({
            battleInfo: {
                ...state.battleInfo,
                playedCards: addCardToPlay(state.battleInfo.playedCards, card, pos),
            },
        })),

    attackCard: (card: Card, eCard: Card) =>
        set((state) => ({
            battleInfo: {
                ...state.battleInfo,
                playedCards: takeDamage(state.battleInfo.playedCards, card, eCard.atk),
            },
            enemyBattleInfo: {
                ...state.enemyBattleInfo,
                playedCards: takeDamage(
                    state.enemyBattleInfo.playedCards,
                    eCard,
                    card.atk
                ),
            },
        })),
    attackElp: (atk: number) =>
        set((state) => ({
            enemyBattleInfo: {
                ...state.enemyBattleInfo,
                lp: state.enemyBattleInfo.lp - atk,
            },
        })),
    attacklp: (atk: number) =>
        set((state) => ({
            battleInfo: { ...state.battleInfo, lp: state.battleInfo.lp - atk },
        })),
    setEnergy: (cost: number) => set((state) => ({ battleInfo: { ...state.battleInfo, energy: state.battleInfo.energy - cost } })),
    resetEnergy: () => set((state) => ({ battleInfo: { ...state.battleInfo, energy: state.turn + 1 }, enemyBattleInfo: { ...state.enemyBattleInfo, energy: state.turn + 1 } })),
    setWinCond: () =>
        set((state) => ({
            battleWinCond: checkWinCond(
                state.battleInfo.lp,
                state.enemyBattleInfo.lp,
                state.battleInfo.drawPos,
                state.enemyBattleInfo.drawPos
            ),
        })),
    finishBattle: () =>
        set(() => ({
            battleInfo: {
                deck: [],
                handCards: [null, null, null, null, null],
                drawPos: 12,
                playedCards: [null, null, null, null, null, null, null, null],
                lp: 10,
                energy: 1,
            },
            enemyBattleInfo: {
                deck: [],
                handCards: [null, null, null, null, null],
                drawPos: 12,
                playedCards: [null, null, null, null, null, null, null, null],
                lp: 10,
                energy: 1,
            },
            turn: 1,
            gamePhase: "Draw",
        })),
}));

export default usePlayerStore;
