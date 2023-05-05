import { useState } from "react";
import usePlayerStore from "../../store/store"
import { Welcome } from "./Welcome";
import { ChooseDeck } from "./ChooseDeck";

export const TutorialDashboard: React.FC = () => {
    const [step, setStep] = useState(1);
    const [setTutorial] = usePlayerStore((state) => [state.setTutorial])
    const cancelTutorial = () => {
        localStorage.setItem('isTutorial', "0")
        setTutorial()
    }


    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePrevStep = () => {
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
                return null;
        }
    };

    return (
        <div className="min-h-screen">
            {renderStep()}
            {step !== 1 && (
                <button onClick={handlePrevStep}>Previous Step</button>
            )}
            {step !== 3 ? (
                <button onClick={handleNextStep}>Next Step</button>
            ) : (
                <button onClick={cancelTutorial}>Start Adventure!</button>
            )}
        </div>
    );

}
