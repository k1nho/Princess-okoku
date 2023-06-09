import { GiCrown } from "react-icons/gi";
import usePlayerStore from "../store/store";
import { Accordion } from "./ui/Accordion";

const content = [
    {
        id: 1,
        title: "Princess Okoku",
        content:
            "Princess Okoku is a turn-based card game, where you use a deck to progress to a story. The tutorial will reward you with one of four available decks (Techno Princess, Dragon Empire, Animal Dolls, Spirit Fairies) that you can use as you begin your adventure.",
    },

    {
        id: 2,
        title: "Game Modes",
        content:
            "Princess Okoku consists of one main game mode that you can find on the top right in explore button or the continue button in the Okoku center. This follows the main story line of Princess Okoku as you win battles more decks will be unlocked as well as stories about the worlds explore in that battle. Win battles to level up and unlock more decks and stories.",
    },

    {
        id: 3,
        title: "Game Mechanics",
        content:
            "Princess Okoku is a card game where you take turns against the story bosses each with their own unique decks and mechanics. On one turn a player can use up to the total of energy points available to play cards from their hand into the field. If there are attackers on the field, all their effects, if any, resolve and then they can attack the attackers on the other field. When no attackers are left, the player can attack directly to the boss health. There are two ways to reach victory in Princess Okoku, by reducing the lifepoints to 0 or by thinning out a deck (the first player to reach 0 cards to draw losses).",
    },

    {
        id: 4,
        title: "Cards",
        content:
            "In Princess Okoku, cards are the source of strategy. Cards can be of 2 types attack cards or spell cards. Attack cards have a cost determined by the number on the top left, this is the energy needed to summon that card. Moreover, they have both attack and defense, signified by the red and blue sections in the center. Lastly, they can have an effect (see Effects) or be normal. Unlike attack cards, Spell cards do not have attack and defense, and are used to gain an effect.",
    },

    {
        id: 5,
        title: "Effects",
        content:
            "In Princess Okoku, a card can have any of the following special effects: 1) Atk +(n): A card with this effect boosts all of its allies attack on the field by (n) 2) HP +(n): A card with this effect boost all of its allies defense on the field by (n) 3) Dmg +(n): A card with this effect deals (n) damage to all of the cards in the opponent field  4) Cost -(n): A card with this effect reduces the cost of all the cards in hand by (n)",
    },
    {
        id: 6,
        title: "How to Collect Decks",
        content:
            "In order to collect new decks, you must play the story mode. To access the story mode, you can click the explore button on your dashboard. Every new world yields a new deck (beating the machina world yields the techno princess deck, beating the dragon's den yields the dragon empire deck, and so on).",
    },
    {
        id: 7,
        title: "How to Switch Decks",
        content:
            "In the Okoku Center, click on change deck. You will gain access to decks you have collected in the story, and are ready to use. Simply click on one of the options and you will be able to use that deck on your next exploration.",
    },
    {
        id: 8,
        title: "Where can I Read the Story",
        content:
            "In the Okoku Center, click on Read story. You will gain access to the current story based on the level you are in. After finishing a battle resulting in victory, you will unlock a brand new story for the corresponding world map.",
    },
    {
        id: 9,
        title: "The Gacha System",
        content: "Aside from collecting decks, you can also collect unique cards via the gacha system (not usable in battle). For every battle won, you will gain 10 Okoku coins which can be used in the Gacha to get a unique card. This is a collection of many creatures from Althreisha that do not appear in the main story with the exception of Princess Kaede.",
    },
];

export const Learn: React.FC = () => {
    const [setGameMode] = usePlayerStore((state) => [state.setGameMode]);
    return (
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex flex-col p-8">
            <div className="p-2">
                <button
                    className="flex items-center space-x-2 bg-stone-900 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700 text-white"
                    onClick={() => setGameMode("Dashboard")}
                >
                    <p>Dashboard</p>
                    <GiCrown />
                </button>
            </div>

            {content.map((c) => (
                <Accordion key={c.id} title={c.title} content={c.content} />
            ))}
        </div>
    );
};
