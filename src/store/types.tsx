export interface Card {
    id: string,
    name: string,
    iml: string,
    cost: number,
    atk: number,
    def: number,
    special: string,
    description: string
}

export interface PlayerInfo {
    id: string,
    wins: number,
    losses: number,
    name: string
}

export interface BattleInfo {
    deck: Card[],
    drawPos: number,
    handCards: (Card | null)[],
    playedCards: (Card | null)[],
    lp: number,
    energy: number
}
