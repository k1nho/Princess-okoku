import { Card } from "./types";

// (0,12) Techno Princess Deck
// (13, 24) Dragon Empire Deck
// (25, 36) Spirit Fairies Empire Deck
export const cardpool: Card[] = [
    { id: "1", name: "AI Princess", iml: "src/assets/decks/techno_princess/card_ai_princess.png", atk: 6, def: 6, cost: 6, special: "instantdmg 3", description: "Dmg +3" },
    { id: "2", name: "Mini Princess", iml: "src/assets/decks/techno_princess/card_mini_princess.png", atk: 1, def: 2, cost: 1, special: "", description: "" },
    { id: "3", name: "Wifi Princess", iml: "src/assets/decks/techno_princess/card_princess_wifi.png", atk: 3, def: 2, cost: 2, special: "", description: "" },
    { id: "4", name: "Look Princess", iml: "src/assets/decks/techno_princess/card_search_princess.png", atk: 2, def: 2, cost: 2, special: "reducecost 1", description: "Cost -1" },
    { id: "5", name: "Techno King", iml: "src/assets/decks/techno_princess/card_techno_king.png", atk: 5, def: 5, cost: 5, special: "instantdmg 2", description: "Dmg +2" },
    { id: "6", name: "Techno Dash", iml: "src/assets/decks/techno_princess/card_techno_servant.png", atk: 3, def: 3, cost: 3, special: "instantatk 2", description: "Atk +2" },
    { id: "7", name: "TCP Princess", iml: "src/assets/decks/techno_princess/card_princess_tcp.png", atk: 1, def: 2, cost: 1, special: "instanthp 1", description: "HP +1" },
    { id: "8", name: "Techno R", iml: "src/assets/decks/techno_princess/card_techno_princess.png", atk: 2, def: 3, cost: 3, special: "", description: "" },
    { id: "9", name: "Prouter", iml: "src/assets/decks/techno_princess/qp_princess_router.png", atk: 0, def: 0, cost: 2, special: "instanthp 2", description: "HP +2" },
    { id: "10", name: "Ruler Baton", iml: "src/assets/decks/techno_princess/qp_princess_baston.png", atk: 0, def: 0, cost: 3, special: "reducecost 4", description: "Cost -4" },
    { id: "11", name: "Princess PC", iml: "src/assets/decks/techno_princess/qp_princess_computer.png", atk: 0, def: 0, cost: 2, special: "instantatk 2", description: "Atk +2" },
    { id: "12", name: "Ruler Portal", iml: "src/assets/decks/techno_princess/qp_princess_portal.png", atk: 0, def: 0, cost: 3, special: "instantatk 2", description: "Atk +2" },


    { id: "13", name: "Barrier Dragon", iml: "src/assets/decks/dragon_empire/card_barrier_dragon.png", atk: 1, def: 3, cost: 2, special: "instanthp 2", description: "HP +2" },
    { id: "14", name: "Dragon Pot", iml: "src/assets/decks/dragon_empire/card_dragon_pot.png", atk: 2, def: 1, cost: 1, special: "instantdmg 1", description: "Dmg +1" },
    { id: "15", name: "Dragon Genie", iml: "src/assets/decks/dragon_empire/card_dragon_genie.png", atk: 2, def: 2, cost: 1, special: "instantdmg 1", description: "Dmg +1" },
    { id: "16", name: "Gold Dragon", iml: "src/assets/decks/dragon_empire/card_golden_dragon.png", atk: 3, def: 2, cost: 2, special: "instantdmg 1", description: "Dmg +1" },
    { id: "17", name: "Flash Dragon", iml: "src/assets/decks/dragon_empire/card_flash_dragon.png", atk: 4, def: 1, cost: 3, special: "", description: "" },
    { id: "18", name: "ZZZ Dragon", iml: "src/assets/decks/dragon_empire/card_zzz_dragon.png", atk: 2, def: 2, cost: 2, special: "instanthp 1", description: "HP +1" },
    { id: "19", name: "Dad Dragon", iml: "src/assets/decks/dragon_empire/card_dad_dragon.png", atk: 7, def: 6, cost: 6, special: "", description: "" },
    { id: "20", name: "Zig", iml: "src/assets/decks/dragon_empire/card_zig_dragon.png", atk: 1, def: 1, cost: 2, special: "reducecost 2", description: "Cost -2" },
    { id: "21", name: "Dragon Potion", iml: "src/assets/decks/dragon_empire/qp_dragon_heal.png", atk: 0, def: 0, cost: 1, special: "instanthp 1", description: "HP +1" },
    { id: "22", name: "Dragon Map", iml: "src/assets/decks/dragon_empire/qp_dragon_map.png", atk: 0, def: 0, cost: 3, special: "reducecost 3", description: "Cost -3" },
    { id: "23", name: "Dragon Power", iml: "src/assets/decks/dragon_empire/qp_dragon_power.png", atk: 0, def: 0, cost: 1, special: "instantatk 1", description: "Atk +1" },
    { id: "24", name: "Dragon Wand", iml: "src/assets/decks/dragon_empire/qp_dragon_wand.png", atk: 0, def: 0, cost: 2, special: "instantdmg 2", description: "Dmg +2" },



    { id: "25", name: "Baby Fairy", iml: "src/assets/decks/spirit_fairies/card_baby_angel.png", atk: 1, def: 2, cost: 1, special: "", description: "" },
    { id: "26", name: "Astro Fairy", iml: "src/assets/decks/spirit_fairies/card_astro_fairy.png", atk: 3, def: 3, cost: 3, special: "", description: "" },
    { id: "27", name: "Pinku", iml: "src/assets/decks/spirit_fairies/card_pinku_fairy.png", atk: 2, def: 1, cost: 2, special: "instantatk 2", description: "Atk +2" },
    { id: "28", name: "Yai Twin", iml: "src/assets/decks/spirit_fairies/card_yai_fairy.png", atk: 2, def: 2, cost: 1, special: "instantatk 2", description: "Atk +2" },
    { id: "29", name: "Yia Twin", iml: "src/assets/decks/spirit_fairies/card_yia_fairy.png", atk: 1, def: 2, cost: 2, special: "instantatk 1", description: "Atk +1" },
    { id: "30", name: "Alance", iml: "src/assets/decks/spirit_fairies/card_balance_fairy.png", atk: 4, def: 2, cost: 4, special: "instantatk 1", description: "Atk +1" },
    { id: "31", name: "Ballet Fairy", iml: "src/assets/decks/spirit_fairies/card_ballet_fairy.png", atk: 2, def: 1, cost: 1, special: "instantatk 1", description: "Atk +1" },
    { id: "32", name: "Terra", iml: "src/assets/decks/spirit_fairies/card_health_fairy.png", atk: 3, def: 2, cost: 2, special: "instantatk 3", description: "Atk +3" },
    { id: "33", name: "Fairy Dress", iml: "src/assets/decks/spirit_fairies/qp_fairy_dress.png", atk: 0, def: 0, cost: 1, special: "instanthp 1", description: "HP +1" },
    { id: "34", name: "Spirit Boost", iml: "src/assets/decks/spirit_fairies/qp_spirit_boost.png", atk: 0, def: 0, cost: 2, special: "instantatk 2", description: "Atk +2" },
    { id: "35", name: "Spirit Heal", iml: "src/assets/decks/spirit_fairies/qp_spirit_heal.png", atk: 0, def: 0, cost: 2, special: "instanthp 1", description: "HP +1" },
    { id: "36", name: "Magic Wand", iml: "src/assets/decks/spirit_fairies/qp_magic_wand.png", atk: 0, def: 0, cost: 1, special: "instantatk 1", description: "Atk +1" },


    { id: "37", name: "Berose", iml: "src/assets/decks/talking_cats/card_berose.png", atk: 1, def: 2, cost: 1, special: "reducecost 1", description: "Cost -1" },
    { id: "38", name: "Koma", iml: "src/assets/decks/talking_cats/card_koma_doll.png", atk: 2, def: 1, cost: 1, special: "reducecost 1", description: "Cost -1" },
    { id: "39", name: "Kurochi", iml: "src/assets/decks/talking_cats/card_kurochi.png", atk: 4, def: 3, cost: 3, special: "reducecost 2", description: "Cost -3" },
    { id: "40", name: "Mitten", iml: "src/assets/decks/talking_cats/card_mitten.png", atk: 1, def: 1, cost: 1, special: "", description: "" },
    { id: "41", name: "Nichirinko", iml: "src/assets/decks/talking_cats/card_nichirinko.png", atk: 3, def: 2, cost: 2, special: "reducecost 1", description: "Cost -1" },
    { id: "42", name: "Risto", iml: "src/assets/decks/talking_cats/card_risto.png", atk: 3, def: 3, cost: 3, special: "reducecost 2", description: "Cost -2" },
    { id: "43", name: "Stringer", iml: "src/assets/decks/talking_cats/card_stringer.png", atk: 5, def: 5, cost: 4, special: "", description: "" },
    { id: "44", name: "Troas", iml: "src/assets/decks/talking_cats/card_troas.png", atk: 7, def: 7, cost: 5, special: "reducecost 4", description: "Cost -4" },
    { id: "45", name: "Funbox", iml: "src/assets/decks/talking_cats/qp_funbox.png", atk: 0, def: 0, cost: 1, special: "instantatk 1", description: "Atk +1" },
    { id: "46", name: "Pasristo", iml: "src/assets/decks/talking_cats/qp_pasristo.png", atk: 0, def: 0, cost: 1, special: "instanthp 1", description: "HP +1" },
    { id: "47", name: "Heltroas", iml: "src/assets/decks/talking_cats/qp_heltroas.png", atk: 0, def: 0, cost: 4, special: "reducecost 4", description: "Cost -4" },

    { id: "48", name: "Shredder", iml: "src/assets/decks/talking_cats/qp_shredder.png", atk: 0, def: 0, cost: 2, special: "instantatk 2", description: "Atk +2" },
]
