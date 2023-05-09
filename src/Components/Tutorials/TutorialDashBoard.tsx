import { useState } from "react";
import usePlayerStore from "../../store/store";
import { Welcome } from "./Welcome";
import { ChooseDeck } from "./ChooseDeck";
import { ConfirmDeck } from "./ConfirmDeck";
import { parseInt } from "lodash";

export const TutorialDashboard: React.FC = () => {
    const [step, setStep] = useState(1);
    const [setTutorial, deck] = usePlayerStore((state) => [state.setTutorial, state.deck]);
    const cancelTutorial = () => {
        localStorage.setItem("isTutorial", "0");
        setTutorial();
        const l = localStorage.getItem("po_playerdeck")
        if (l !== null) {
            const deckId = parseInt(l, 10)
            localStorage.setItem("po_odecks", JSON.stringify([deckId]))
        }
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Welcome />;
            case 2:
                return <ChooseDeck />;
            case 3:
                return <ConfirmDeck />;
            default:
                return <></>;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col justify-center items-center space-y-4">
            {renderStep()}
            <div className="flex justify-center items-center space-x-4 p-4">
                {step !== 1 && (
                    <div onClick={handlePrevStep}>
                        <button className="bg-stone-900 hover:bg-stone-800 group transition inline-flex items-center rounded-full px-4 py-1.5 font-semibold text-white">
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
                    </div>
                )}
                {step !== 3 ? (
                    <button className=" bg-stone-900 hover:bg-stone-800 group transition inline-flex items-center rounded-full px-4 py-1.5 font-semibold text-white" onClick={handleNextStep} disabled={deck === -1 && step !== 1}>
                        {deck === -1 && step != 1 ? "Choose Deck" : <>Continue
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
                        </>}
                    </button>
                ) : (
                    <div onClick={cancelTutorial}>
                        <button className="bg-stone-900 hover:bg-stone-800 group transition inline-flex items-center rounded-full px-4 py-1.5 font-semibold text-white">
                            Start Adventure
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
                )}
            </div>
        </div>
    );
};
