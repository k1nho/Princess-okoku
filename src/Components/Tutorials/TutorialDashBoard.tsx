import { useState } from "react";
import usePlayerStore from "../../store/store";
import { Welcome } from "./Welcome";
import { ChooseDeck } from "./ChooseDeck";

export const TutorialDashboard: React.FC = () => {
    const [step, setStep] = useState(1);
    const [btnText, setBtnText] = useState("Choose Deck");
    const [setTutorial] = usePlayerStore((state) => [state.setTutorial]);
    const cancelTutorial = () => {
        localStorage.setItem("isTutorial", "0");
        setTutorial();
    };

    const handleNextStep = () => {
        if (step + 1 === 2) setBtnText("Finish");
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        if (step - 1 === 1) setBtnText("Choose Deck");
        setStep(step - 1);
    };

    const handleReset = () => {
        setStep(1);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Welcome />;
            case 2:
                return <ChooseDeck />;
            case 3:
                return <p>Step 3: More text here</p>;
            default:
                return <></>;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 space-y-4">
            {renderStep()}
            <div className="flex justify-center">
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
                    <div onClick={handleNextStep}>
                        <button className=" bg-stone-900 hover:bg-stone-800 group transition inline-flex items-center rounded-full px-4 py-1.5 font-semibold text-white">
                            {btnText}
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
                ) : (
                    <div onClick={cancelTutorial}>
                        <button className="bg-gradient-to-r from-green-300 to-purple-400  group transition inline-flex items-center rounded-full px-4 py-1.5 font-semibold text-white">
                            {btnText}
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
