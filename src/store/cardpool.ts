import { Card } from "./types";

// (0,12) Techno Princess Deck
// (13, 24) Dragon Empire Deck
// (25, 36) Spirit Fairies Empire Deck
export const cardpool: Card[] = [
    { id: "1", name: "AI Princess", iml: "src/assets/decks/techno_princess/card_ai_princess.png", atk: 6, def: 6, cost: 7, special: "instantdmg 3", description: "instant damage 3" },
    { id: "2", name: "Mini Princess", iml: "src/assets/decks/techno_princess/card_mini_princess.png", atk: 1, def: 2, cost: 1, special: "", description: "" },
    { id: "3", name: "Wifi Princess", iml: "src/assets/decks/techno_princess/card_princess_wifi.png", atk: 3, def: 1, cost: 3, special: "", description: "" },
    { id: "4", name: "Look Princess", iml: "src/assets/decks/techno_princess/card_search_princess.png", atk: 2, def: 2, cost: 2, special: "search 1", description: "search AI Princess" },
    { id: "5", name: "Techno King", iml: "src/assets/decks/techno_princess/card_techno_king.png", atk: 5, def: 5, cost: 5, special: "instanthp 2", description: "Instant hp 2" },
    { id: "6", name: "Techno Dash", iml: "src/assets/decks/techno_princess/card_techno_servant.png", atk: 3, def: 2, cost: 3, special: "", description: "" },
    { id: "7", name: "TCP Princess", iml: "src/assets/decks/techno_princess/card_princess_tcp.png", atk: 1, def: 2, cost: 1, special: "search 4", description: "Search Look Princess" },
    { id: "8", name: "Techno R", iml: "src/assets/decks/techno_princess/card_techno_princess.png", atk: 2, def: 3, cost: 3, special: "", description: "" },
    { id: "9", name: "Prouter", iml: "src/assets/decks/techno_princess/qp_princess_router.png", atk: -1, def: -1, cost: 2, special: "instanthp 3", description: "instant hp 3" },
    { id: "10", name: "Ruler Baton", iml: "src/assets/decks/techno_princess/qp_princess_baston.png", atk: -1, def: -1, cost: 3, special: "reducecost 1 5", description: "AI Princess -5 cost" },
    { id: "11", name: "Princess PC", iml: "src/assets/decks/techno_princess/qp_princess_computer.png", atk: -1, def: -1, cost: 1, special: "search 4", description: "Search Look Princess" },
    { id: "12", name: "Ruler Portal", iml: "src/assets/decks/techno_princess/qp_princess_portal.png", atk: -1, def: -1, cost: 4, special: "instantinvoke 1", description: "Instant AI Princess" },


    { id: "13", name: "Barrier Dragon", iml: "src/assets/decks/dragon_empire/card_barrier_dragon.png", atk: 1, def: 3, cost: 2, special: "instanthp 2", description: "Instant hp 2" },
    { id: "14", name: "Dragon Pot", iml: "src/assets/decks/dragon_empire/card_dragon_pot.png", atk: 2, def: 1, cost: 1, special: "instantdmg 1", description: "Instant damage 1" },
    { id: "15", name: "Dragon Genie", iml: "src/assets/decks/dragon_empire/card_dragon_genie.png", atk: 2, def: 2, cost: 1, special: "search 13", description: "Search Barrier Dragon" },
    { id: "16", name: "Gold Dragon", iml: "src/assets/decks/dragon_empire/card_golden_dragon.png", atk: 3, def: 2, cost: 2, special: "instantdmg 1", description: "Instant damage 1" },
    { id: "17", name: "Flash Dragon", iml: "src/assets/decks/dragon_empire/card_flash_dragon.png", atk: 4, def: 1, cost: 3, special: "instantdmg 2", description: "Instant damage 2" },
    { id: "18", name: "ZZZ Dragon", iml: "src/assets/decks/dragon_empire/card_zzz_dragon.png", atk: 2, def: 2, cost: 2, special: "instanthp 2", description: "Instant hp 2" },
    { id: "19", name: "Dad Dragon", iml: "src/assets/decks/dragon_empire/card_dad_dragon.png", atk: 7, def: 6, cost: 7, special: "", description: "" },
    { id: "20", name: "Zig", iml: "src/assets/decks/dragon_empire/card_zig_dragon.png", atk: 1, def: 1, cost: 2, special: "instantinvoke 19", description: "Instant Dad Dragon" },
    { id: "21", name: "Dragon Potion", iml: "src/assets/decks/dragon_empire/qp_dragon_heal.png", atk: -1, def: -1, cost: 1, special: "instanthp 1", description: "Instant hp 1" },
    { id: "22", name: "Dragon Map", iml: "src/assets/decks/dragon_empire/qp_dragon_map.png", atk: -1, def: -1, cost: 3, special: "search 20", description: "Instant Zig" },
    { id: "23", name: "Dragon Power", iml: "src/assets/decks/dragon_empire/qp_dragon_power.png", atk: -1, def: -1, cost: 1, special: "instantatk 1", description: "Instant attack 1" },
    { id: "24", name: "Dragon Wand", iml: "src/assets/decks/dragon_empire/qp_dragon_wand.png", atk: -1, def: -1, cost: 2, special: "instantdmg 2", description: "Instant damage 2" },



    { id: "25", name: "Baby Fairy", iml: "src/assets/decks/spirit_fairies/card_baby_angel.png", atk: 1, def: 2, cost: 1, special: "instantatk 2", description: "Instant attack 2" },
    { id: "26", name: "Astro Fairy", iml: "src/assets/decks/spirit_fairies/card_astro_fairy.png", atk: 3, def: 3, cost: 3, special: "", description: "" },
    { id: "27", name: "Pinku", iml: "src/assets/decks/spirit_fairies/card_pinku_fairy.png", atk: 2, def: 2, cost: 2, special: "instantatk 2", description: "Instant attack 2" },
    { id: "28", name: "Yai Twin", iml: "src/assets/decks/spirit_fairies/card_yai_fairy.png", atk: 2, def: 2, cost: 1, special: "instantatk 3", description: "Instant attack 3" },
    { id: "29", name: "Yia Twin", iml: "src/assets/decks/spirit_fairies/card_yia_fairy.png", atk: 1, def: 2, cost: 2, special: "search 28", description: "Search Yai Twin" },
    { id: "30", name: "Alance", iml: "src/assets/decks/spirit_fairies/card_balance_fairy.png", atk: 4, def: 2, cost: 4, special: "instantatk 1", description: "Instant attack 1" },
    { id: "31", name: "Ballet Fairy", iml: "src/assets/decks/spirit_fairies/card_ballet_fairy.png", atk: 2, def: 1, cost: 1, special: "instantatk 1", description: "Instant attack 1" },
    { id: "32", name: "Terra", iml: "src/assets/decks/spirit_fairies/card_health_fairy.png", atk: 3, def: 2, cost: 2, special: "instanthp 3", description: "Instant hp 3" },
    { id: "33", name: "Fairy Dress", iml: "src/assets/decks/spirit_fairies/qp_fairy_dress.png", atk: -1, def: -1, cost: 1, special: "instanthp 1", description: "Instant hp 1" },
    { id: "34", name: "Spirit Boost", iml: "src/assets/decks/spirit_fairies/qp_spirit_boost.png", atk: -1, def: -1, cost: 2, special: "instantatk 2", description: "Instant attack 2" },
    { id: "35", name: "Spirit Heal", iml: "src/assets/decks/spirit_fairies/qp_spirit_heal.png", atk: -1, def: -1, cost: 2, special: "instanthp 2", description: "Instant hp 2" },
    { id: "36", name: "Magic Wand", iml: "src/assets/decks/spirit_fairies/qp_magic_wand.png", atk: -1, def: -1, cost: 1, special: "search 29", description: "Search Yia Twin" },
]
