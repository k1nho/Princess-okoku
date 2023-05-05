import { Card } from "./types";

export const cardpool: Card[] = [
    { id: "1", name: "AI Princess", iml: "src/assets/decks/techno_princess/card_ai_princess.png", atk: 6, def: 6, cost: 7, special: "instantdmg 3", description: "instant dmg 3" },
    { id: "2", name: "Mini Princess", iml: "src/assets/decks/techno_princess/card_mini_princess.png", atk: 1, def: 2, cost: 1, special: "", description: "" },
    { id: "3", name: "Wifi Princess", iml: "src/assets/decks/techno_princess/card_princess_wifi.png", atk: 3, def: 1, cost: 3, special: "", description: "" },
    { id: "4", name: "Look Princess", iml: "src/assets/decks/techno_princess/card_search_princess.png", atk: 2, def: 2, cost: 2, special: "search 1", description: "search AI Princess" },
    { id: "5", name: "Techno King", iml: "src/assets/decks/techno_princess/card_techno_king.png", atk: 5, def: 5, cost: 5, special: "instanthp 2", description: "Instant hp 2" },
    { id: "6", name: "Techno Servant", iml: "src/assets/decks/techno_princess/card_techno_servant.png", atk: 3, def: 2, cost: 3, special: "", description: "" },
    { id: "7", name: "TCP Princess", iml: "src/assets/decks/techno_princess/card_princess_tcp.png", atk: 1, def: 2, cost: 1, special: "search 4", description: "Search Look Princess" },
    { id: "8", name: "Techno Princess", iml: "src/assets/decks/techno_princess/card_techno_princess.png", atk: 2, def: 3, cost: 3, special: "", description: "" },
    { id: "9", name: "Princess Router", iml: "src/assets/decks/techno_princess/qp_princess_router.png", atk: -1, def: -1, cost: 2, special: "instanthp 3", description: "instant hp 3" },
    { id: "10", name: "Princess Baton", iml: "src/assets/decks/techno_princess/qp_princess_baton.png", atk: -1, def: -1, cost: 3, special: "reducecost 1 5", description: "AI Princess -5 cost" },
    { id: "11", name: "Princess PC", iml: "src/assets/decks/techno_princess/qp_princess_computer.png", atk: -1, def: -1, cost: 1, special: "search 4", description: "Search Look Princess" },
    { id: "12", name: "Princess Portal", iml: "src/assets/decks/techno_princess/qp_princess_portal.png", atk: -1, def: -1, cost: 1, special: "instantinvoke 1", description: "Instant AI Princess" },


    { id: "13", name: "Barrier Dragon", iml: "src/assets/decks/dragon_empire/card_barrier_dragon.png", atk: 1, def: 3, cost: 2, special: "instanthp 2", description: "Instant hp 2" },
    { id: "14", name: "Dragon Pot", iml: "src/assets/decks/dragon_empire/card_dragon_pot.png", atk: 2, def: 1, cost: 1, special: "instantdmg 1", description: "Instant dmg 1" },
    { id: "15", name: "Dragon Genie", iml: "src/assets/decks/dragon_empire/card_dragon_genie.png", atk: 2, def: 2, cost: 1, special: "search 13", description: "Search Barrier Dragon" },
    { id: "16", name: "Gold Dragon", iml: "src/assets/decks/dragon_empire/card_golden_dragon.png", atk: 3, def: 2, cost: 2, special: "instantdmg 1", description: "Instant dmg 1" },
]
