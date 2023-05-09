import { useState } from "react";

const dialogs = [
    { name: "narrator", dialog: "Princess Kaede wanders through the kingdom of Althreisha, feeling lost and confused. Suddenly, she hears a strange noise and turns to see three princesses approaching her. They are AI Princess, Wifi Princess, and TCP Princess." },

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
        <div className="flex flex-col items-center justify-center bg-cover bg-center bg-fixed h-screen w-screen">
            <div className="flex justify-center w-full h-3/4">
                <div className="w-1/3 h-full">
                    <img
                        className="h-full mx-auto"
                        src={"src"}
                        alt="Protagonist"
                    />
                </div>
                <div className="w-2/3 h-full">
                    <div className="bg-white p-4 rounded-lg shadow-md w-5/6 h-full mx-auto overflow-y-auto">
                        <div className="flex flex-col">
                            {dialogs[dialogIndex].name === "Princess Kaede" && (
                                <div className="my-2 p-2 bg-green-300 rounded-md shadow-md">
                                    <p>{dialogs[dialogIndex].dialog}</p>
                                </div>
                            )}
                            {dialogs[dialogIndex].name !== "Princess Kaede" && (
                                <div className="my-2 p-2 bg-blue-300 rounded-md shadow-md">
                                    <p>{dialogs[dialogIndex].dialog}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-full">
                    <img
                        className="h-full mx-auto"
                        src={"src"}
                        alt="Secondary Character"
                    />
                </div>
            </div>
            <div className="mt-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={prevDialog}
                >
                    Previous
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={nextDialog}
                >
                    Next
                </button>
            </div>
        </div>
    );


}
