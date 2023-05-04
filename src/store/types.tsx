export interface MonsterCard {
    id: string,
    cost: number,
    atk: number,
    def: number,
    special: string
}

export interface SpellCard {
    id: string
    cost: number,
    special: string
}

export interface PlayerInfo {
    id: string,
    wins: number,
    losses: number,
    name: string
}

export type Card = MonsterCard | SpellCard

