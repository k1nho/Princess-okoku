import { useState } from "react";
import pkaede from "../../assets/story_sprites/princess_kaede_nbg.webp";
import aiprincess from "../../assets/story_sprites/ai_princess.webp"
import tcpprincess from "../../assets/story_sprites/TCP_princess.webp"
import wifiprincess from "../../assets/story_sprites/wifiprin.webp"
import usePlayerStore from "../../store/store";
import { GiCrown } from "react-icons/gi";

const dialogs = [
    { name: "Narrator", dialog: "Princess Kaede wanders through the kingdom of Althreisha, feeling lost and confused. Suddenly, she hears a strange noise and turns to see three princesses approaching her. They are AI Princess, Wifi Princess, and TCP Princess." },

    { name: "AI Princess", dialog: "Hello there, Princess Kaede! We couldn't help but notice that you seem lost. Can we help you?" },
    { name: "Princess Kaede", dialog: "Oh, thank you so much. I'm not really sure where to go or what to do next" },

    { name: "Wifi Princess", dialog: "No problem at all! Let us explain to you about the internet and how it works in the kingdom of Althreisha. You see, we have a network that connects all of us and allows us to communicate with each other" },

    { name: "TCP Princess", dialog: "Yes, and it has had a significant impact on our society. It has allowed us to share information and knowledge, and it has made our lives easier and more convenient. Here make handshake with me I'll show you the other worlds" },

    { name: "Narrator", dialog: "Princess Kaede shakes the hand! and sees dragons, fairies, and a space cat?!" },

    { name: "Princess Kaede", dialog: "So, what do you all do here in the kingdom of Althreisha?" },
    { name: "AI Princess", dialog: "Well, we oversee the internet here. I'm the Artificial Intelligence princess, and I help ensure that everything runs smoothly." },
    { name: "Wifi Princess", dialog: "And I'm the Wifi Princess. I'm responsible for making sure that everyone in the kingdom has access to the internet" },
    { name: "TCP Princess", dialog: "And I'm the TCP Princess. I'm in charge of all the data transmissions and making sure that the information gets to where it needs to go." },
    { name: "Princess Kaede", dialog: "That sounds like important work." },
    { name: "AI Princess", dialog: "Yes, it is. The internet is an important part of our world, and we have to make sure that it's working properly." },
    { name: "Wifi Princess", dialog: "And it's not just about making sure people can watch those funny talking cat videos. The internet has a big impact on our society." },
    { name: "TCP Princess", dialog: "That's right. It's important to understand how the internet works and how it affects our daily lives." },
    { name: "Princess Kaede", dialog: "I see. It sounds like you all take your jobs very seriously." },
    { name: "AI Princess", dialog: "Yes, we do. But we're also very emotional creatures. Don't be fooled by our robotic exteriors." },
    { name: "Wifi Princess", dialog: "That's right. We have feelings just like anyone else." },
    { name: "TCP Princess", dialog: "And sometimes, we get overwhelmed by all the data we have to manage. It can be stressful." },
    { name: "Princess Kaede", dialog: "I understand. It sounds like you all have a lot to deal with." },
    { name: "AI Princess", dialog: "It can be tough, but we do what we can to keep things running smoothly." },
    { name: "Wifi Princess", dialog: "And we're always here to help if you need anything." },
    { name: "TCP Princess", dialog: "That's right. Don't hesitate to ask us for help if you need it." },
    { name: "Narrator", dialog: "Princess Kaede nods, feeling grateful for their help." }

]


export const StoryTechno = () => {
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
                <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">The Techno Princesses of Althreisha</h1>
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

                        <img className="h-48" src={aiprincess} alt="AI Princess" />
                        <img className="h-48" src={tcpprincess} alt="TCP princess" />

                    </div>
                    <img className="h-48" src={wifiprincess} alt="Wifi Princess" />

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
