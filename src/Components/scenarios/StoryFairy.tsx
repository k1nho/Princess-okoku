import { useState } from "react"
import { GiCrown } from "react-icons/gi";
import usePlayerStore from "../../store/store";
import pkaede from "../../assets/story_sprites/princess_kaede_nbg.webp";
import terra from "../../assets/story_sprites/terra.webp"
import alance from "../../assets/story_sprites/alance.webp"
import astroFairy from "../../assets/story_sprites/astro_fairy.webp"

const dialogs = [
    { name: "Narrator", dialog: "Princess Kaede encounters a group of fairies, expecting to find them charming and kind. But to her surprise, they are rude and seem to want to cause trouble." },
    { name: "Princess Kaede", dialog: "Excuse me, fairies. I'm new to this world and I'm trying to find my way. Do you have any suggestions on where I could find clues about the truth behind Althreisha?" },

    { name: "Terra", dialog: "Oh, how precious. Another lost little girl in search of the truth. How original." },

    { name: "Alance", dialog: "Can't you see we're busy? We have more important things to do than help some clueless princess." },

    { name: "Astro Fairy", dialog: "It's always the princesses, isn't it? Thinking they can just waltz in here and demand answers." },

    { name: "Alance", dialog: "Yeah, like we're just going to hand over our secrets to the likes of her." },
    { name: "Princess Kaede", dialog: "Wait, what secrets? I just want to know the truth behind this world." },
    { name: "Terra", dialog: "And what makes you think you deserve to know? Do you think just because you're a princess that you're entitled to all the answers?" },

    { name: "Alance", dialog: "We're not going to waste our time with someone who clearly doesn't appreciate the beauty and wonder of our world." },

    { name: "Astro Fairy", dialog: "You don't even belong here. Why don't you go back to your own world where you can be pampered and fawned over like the entitled brat that you are?" },

    { name: "Terra", dialog: "Yeah, go back to your own world and leave us in peace." },
    { name: "Princess Kaede", dialog: "I'm sorry to have bothered you. I didn't mean to come across as entitled or ungrateful. I just thought maybe you could help me." },

    { name: "Terra", dialog: "Look, we're not completely heartless. Maybe we can give you a little hint. But you have to promise not to tell anyone, especially not those pesky dragons." },

    { name: "Alance", dialog: "Yeah, they can't be trusted." },

    { name: "Astro Fairy", dialog: "We've heard rumors of a secret dimension hidden within Althreisha's space. It's said to contain all the knowledge of Althreisha, but only the bravest and most clever can find it." },

    { name: "Alance", dialog: "But be careful, princess. The FelinePaw Nebula is a dangerous place for outsiders. You never know what kind of evil lurks within." },

    { name: "Princess Kaede", dialog: "Thank you. I promise I won't tell anyone. I'll be careful." },

    { name: "Terra", dialog: "Good luck, princess. You'll need it." },

]

export const StoryFairy = () => {
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
                <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Guiding Light or Evil Path</h1>
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

                        <img className="h-48" src={terra} alt="Troas the astronaut" />
                        <img className="h-48" src={alance} alt="Risto the chef" />

                    </div>
                    <img className="h-48" src={astroFairy} alt="Risto the chef" />

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

}
