export interface Card {
    id: string,
    name: string,
    cost: number,
    atk: number,
    def: number,
    special: string
}

export interface PlayerInfo {
    id: string,
    wins: number,
    losses: number,
    name: string
}

export interface BattleInfo {
    deck: Card[],
    handCards: Card[],
    playedCards: Card[],
    lp: number,
    energy: number
}
