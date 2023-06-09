import { useState } from "react";
import { GiCrown } from "react-icons/gi";
import usePlayerStore from "../../store/store";
import troas from "../../assets/story_sprites/troas.webp";
import risto from "../../assets/story_sprites/Risto.webp";
import stringer from "../../assets/story_sprites/Stringer.webp";
import pkaede from "../../assets/story_sprites/princess_kaede_nbg.webp";

const dialogs = [
    {
        name: "Narrator",
        dialog:
            "Princess Kaede comes across a trio of cats, each with a unique talent.",
    },
    {
        name: "Princess Kaede",
        dialog:
            "Wow, I can't believe I'm actually talking to a cat astronaut! How did you even get into space?",
    },

    {
        name: "Troas",
        dialog:
            "Well, it wasn't easy, Princess Kaede. But us cats are pretty resourceful. We built our own spaceship, and I've been exploring the galaxy ever since.",
    },

    {
        name: "Risto",
        dialog:
            "And while Troas was out exploring the galaxy, I was back on our planet perfecting my culinary skills. You should try my fish and mouse stew, Princess Kaede. It's out of this world!",
    },

    {
        name: "Stringer",
        dialog:
            "And while Troas was in space and Risto was in the kitchen, I was out here strumming my guitar, spreading good vibes wherever I go. Because you know what they say, Princess Kaede, laughter is the best medicine.",
    },
    {
        name: "Princess Kaede",
        dialog:
            "You know, I never thought I'd meet such funny cats in space. You all really know how to lighten the mood. Wait, now that I see you, aren't you the popular cats on the internet?!",
    },

    {
        name: "Troas",
        dialog:
            "Indeed princess! laughter is the best medicine. Or in our case, the best way to avoid hairballs. We have some jokes for you I'll start",
    },
    {
        name: "Troas",
        dialog: "Why did the cat join the Red Cross? To be a first-aid kit-teh!",
    },
    {
        name: "Risto",
        dialog:
            "Why did the cat decide to study law? Because they wanted to claw through the legal system!",
    },
    {
        name: "Stringer",
        dialog:
            "Why did the cat join a rock band? To use their purr-fect guitar skills!",
    },
    {
        name: "Narrator",
        dialog:
            "Princess Kaede laughs at their silly jokes and feels a weight lifted off her shoulders. She realizes that sometimes, a little humor can go a long way.",
    },

    {
        name: "Princess Kaede",
        dialog:
            "Haha, you guys are really funny. I definitely needed a good laugh today.",
    },
    {
        name: "Princess Kaede",
        dialog:
            "I've never heard talking cats make jokes before, this is amazing. But don't you guys get stressed out with all of your responsibilities and goals?",
    },

    {
        name: "Risto",
        dialog:
            "Of course we do, Princess Kaede. But we also know the importance of taking breaks and having fun. That's why I always take time to chase a mouse or two before getting back to my cooking.",
    },

    {
        name: "Stringer",
        dialog:
            "And I make sure to take breaks from playing music to nap in the sun. It's all about balance, Princess Kaede.",
    },

    {
        name: "Troas",
        dialog:
            "And when I'm feeling stressed, I just take a moment to look at the stars and remember how small my problems really are in the grand scheme of things.",
    },

    {
        name: "Princess Kaede",
        dialog:
            "That's really wise of you all. I think people could learn a lot from the way you guys live your lives.",
    },

    {
        name: "Risto",
        dialog:
            "Absolutely, Princess Kaede. Life is too short to be stressed out all the time. We should all take a page out of the cat's book and learn to relax and enjoy the journey.",
    },

    {
        name: "Stringer",
        dialog:
            "And don't forget to laugh a little along the way, Princess Kaede. It's good for the soul!",
    },
    {
        name: "Princess Kaede",
        dialog:
            "Thank you all for your company and insights. I have learned so much from all of you, and I appreciate your hospitality.",
    },

    {
        name: "Troas",
        dialog:
            "It was a pleasure to have you here, Princess Kaede. You're welcome back anytime.",
    },

    {

        name: "Risto",
        dialog:
            "And if you're ever in need of some delicious food, just give me a call.",
    },

    {

        name: "Stringer",
        dialog:
            "And if you're ever feeling down, we've got plenty more jokes where those came from!",
    },

    {
        name: "Princess Kaede",
        dialog:
            "Thank you all. Before I leave, I have one more question. What is the truth of Althreisha?",
    },

    {
        name: "Troas",
        dialog:
            "Ah, the truth. Well, I think that's something that each creature in this world must discover for themselves. We all have our own perspectives and experiences that shape our understanding of the truth.",
    },

    {
        name: "Risto",
        dialog:
            "And sometimes the truth isn't what we expect it to be. It can be surprising, even shocking.",
    },

    {
        name: "Stringer",
        dialog:
            "But that's the beauty of it, isn't it? The journey of discovery, the endless pursuit of knowledge and understanding.",
    },

    {
        name: "Princess Kaede",
        dialog:
            "I see. Well, thank you for your words of wisdom. I think I've learned more than I ever could have imagined during my time in Althreisha.",
    },

    { name: "Troas", dialog: "It was an honor to have you here, Princess Kaede." },

    { name: "Risto", dialog: "Safe travels on your journey." },

    { name: "Stringer", dialog: "And don't forget to laugh along the way!" },

    {
        name: "Narrator",
        dialog:
            "Troas opens the dimensional portal for the princess to go back to her world.",
    },
    {
        name: "Princess Kaede",
        dialog: "I won't. Goodbye, my new friends. Until we meet again.",
    },
];

export const StoryCats = () => {
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
                <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Althreisha's Secret</h1>
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

                        <img className="h-48" src={troas} alt="Troas the astronaut" />
                        <img className="h-48" src={risto} alt="Risto the chef" />

                    </div>
                    <img className="h-48" src={stringer} alt="Risto the chef" />

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
