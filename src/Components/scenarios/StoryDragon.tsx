import usePlayerStore from "../../store/store";
import { useState } from "react"
import pkaede from "../../assets/story_sprites/princess_kaede_nbg.png";
import dadDragon from "../../assets/story_sprites/dad_dragon.png"
import zig from "../../assets/story_sprites/zig.png"
import dragonGenie from "../../assets/story_sprites/dragon_genie.png"
import { GiCrown } from "react-icons/gi";

const dialogs = [
    {
        name: "Narrator",
        dialog:
            "As Princess Kaede wanders through the kingdom, she comes across a group of dragons huddled together in fear. She approaches them cautiously, unsure of what to expect.",
    },

    { name: "Princess Kaede", dialog: " AHHHHHHHH Dragon!!!" },
    {
        name: "Dad Dragon",
        dialog:
            "Please don't be afraid of us. We're not the dangerous creatures that people make us out to be.",
    },
    {
        name: "Princess Kaede",
        dialog: "So, you're saying that you're not dangerous?",
    },

    {
        name: "Zig",
        dialog: "That's right! We're actually pretty scared creatures ourselves.",
    },
    {
        name: "Dragon Genie",
        dialog:
            "And we do what we can to avoid any conflict. That's why we live on this volcano.",
    },
    { name: "Princess Kaede", dialog: "Why do you live on a volcano?" },
    {
        name: "Dad Dragon",
        dialog:
            "It's an active volcano, which makes it difficult for people to reach us. We like our privacy.",
    },
    {
        name: "Zig",
        dialog: "And it's also very lonely up here. We don't get many visitors.",
    },
    {
        name: "Dragon Genie",
        dialog: "But we make the best of it. We have each other.",
    },
    {
        name: "Princess Kaede",
        dialog:
            "I can understand that. Sometimes being alone is better than dealing with people.",
    },
    {
        name: "Dad Dragon",
        dialog: "That's true. But it's also important to have friends.",
    },
    {
        name: "Zig",
        dialog: "Friends are important. They make life more bearable.",
    },
    {
        name: "Dragon Genie",
        dialog: "That's right. And we're always here if you need a friend.",
    },
    {
        name: "Princess Kaede",
        dialog:
            "I'm still trying to understand why the dragons are so afraid. They're such majestic creatures, and yet they seem so scared all the time. I wonder if there's more to them than what meets the eye.",
    },
    {
        name: "Zig",
        dialog:
            "I just wish people would stop seeing my dad as a mindless beast. He's the kindest and most loving creature I know. He always makes sure I'm safe and happy, even if it means we have to live in a dangerous place like this volcano. I love him so much, and it hurts me when others fear and hate him without even knowing him.",
    },
    { name: "Dad Dragon", dialog: "Zig..." },
    {
        name: "Princess Kaede",
        dialog:
            "I see your dad is amazing Zig!",
    },

    {
        name: "Princess Kaede",
        dialog:
            "Excuse me, Dragon Genie. I was wondering if you could help me find a clue about the world. You see, I'm lost and I'm trying to search for the truth behind this kingdom. Do you know of any place where I might find some answers?",
    },

    {
        name: "Dragon Genie",
        dialog:
            "I've heard of the Starry Road, where fairies live. They're said to be the opposite of dragons - very kind and humble. Maybe you'll find some answers there, Princess Kaede.",
    },
    { name: "Princess Kaede", dialog: "Thank you. I appreciate that." },
    { name: "Dad Dragon", dialog: "No problem. We're happy to help." },
    { name: "Zig", dialog: "And if you ever need anything, just let us know." },
    {
        name: "Dragon Genie",
        dialog: "We'll do what we can to make sure you're safe.",
    },
    {
        name: "Narrator",
        dialog: "As Princess Kaede nods goodbye, she realized that these creatures were not just fearsome beasts, but also had their own unique and awe-inspiring qualities. Despite their intimidating appearance, the dragons of Althreisha were truly remarkable creatures.",
    },
];

export const StoryDragon = () => {
    const [setGameMode] = usePlayerStore((state) => [state.setGameMode]);
    const [dialogIndex, setDialogIndex] = useState(0);

    const nextDialog = () => {
        if (dialogIndex < dialogs.length - 1) {
            setDialogIndex(dialogIndex + 1);
        }
    };

    const prevDialog = () => {
        if (dialogIndex > 0) {
            setDialogIndex(dialogIndex - 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-stone-900 rounded-xl p-4 text-white text-4xl">
                <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Fear The Dragons?</h1>
            </div>
            <div className="flex justify-center w-full h-3/4">
                <div className="w-1/3 h-full">
                    <img className="h-48 mx-auto" src={pkaede} alt="Protagonist" />
                </div>
                <div className="w-1/3 h-full flex justify-center items-center">
                    <div
                        className="max-w-xs w-full h-full relative"
                        style={{ width: "1000px" }}
                    >
                        <div className="flex flex-col">
                            {dialogs[dialogIndex].name === "Princess Kaede" && (
                                <div className="my-2 p-2 bg-pink-300 rounded-md rounded-bl-none shadow-md">
                                    <h2 className="text-2xl font-bold">
                                        {dialogs[dialogIndex].name}
                                    </h2>
                                    <p style={{ wordWrap: "break-word" }}>
                                        {dialogs[dialogIndex].dialog}
                                    </p>
                                </div>
                            )}
                            {dialogs[dialogIndex].name !== "Princess Kaede" &&
                                dialogs[dialogIndex].name !== "Narrator" && (
                                    <div className="my-2 p-2 bg-blue-300 rounded-md rounded-br-none shadow-md">
                                        <h2 className="text-2xl font-bold">
                                            {dialogs[dialogIndex].name}
                                        </h2>
                                        <p style={{ wordWrap: "break-word" }}>
                                            {dialogs[dialogIndex].dialog}
                                        </p>
                                    </div>
                                )}
                            {dialogs[dialogIndex].name === "Narrator" && (
                                <div className="my-2 p-2 bg-blue-300 rounded-md rounded-br-none shadow-md">
                                    <p
                                        className=" text-2xl text-center font-semibold"
                                        style={{ wordWrap: "break-word" }}
                                    >
                                        {dialogs[dialogIndex].dialog}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>{" "}
                <div className="w-1/3 h-full flex flex-col items-center justify-center">
                    <div className="flex">

                        <img className="h-48" src={dadDragon} alt="AI Princess" />
                        <img className="h-48" src={zig} alt="TCP princess" />

                    </div>
                    <img className="h-48" src={dragonGenie} alt="Wifi Princess" />

                </div>
            </div>
            <div className="mt-4 flex justify-center items-center space-x-4">
                <button
                    className="flex items-center space-x-2 bg-pink-400 rounded-full px-4 py-2 hover:bg-pink-600 transition ease-in-out duration-700 text-white"
                    onClick={() => setGameMode("Dashboard")}
                >
                    <GiCrown />
                    <p>Back To Dashboard</p>
                </button>

                <button
                    className="bg-stone-900 hover:bg-stone-800 group transition inline-flex items-center rounded-full px-4 py-1.5 font-semibold text-white"
                    onClick={prevDialog}
                >
                    <svg
                        className="mt-0.5 mr-2 -ml-1 stroke-white stroke-2 transform rotate-180"
                        fill="none"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        aria-hidden="true"
                    >
                        <path
                            className="opacity-0 group-hover:opacity-100"
                            d="M0 5h7"
                        ></path>
                        <path
                            className="transition group-hover:translate-x-[3px]"
                            d="M1 1l4 4-4 4"
                        ></path>
                    </svg>
                    Back
                </button>
                <button
                    className="bg-stone-900 hover:bg-stone-800 group transition inline-flex items-center rounded-full px-4 py-1.5 font-semibold text-white"
                    onClick={nextDialog}
                >
                    Next
                    <svg
                        className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                        fill="none"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        aria-hidden="true"
                    >
                        <path
                            className="opacity-0 group-hover:opacity-100"
                            d="M0 5h7"
                        ></path>
                        <path
                            className="transition group-hover:translate-x-[3px]"
                            d="M1 1l4 4-4 4"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    );

};
