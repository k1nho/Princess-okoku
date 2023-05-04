import usePlayerStore from "../store/store"

export const TutorialDashboard: React.FC = () => {
    const [setTutorial] = usePlayerStore((state) => [state.setTutorial])
    const cancelTutorial = () => {
        localStorage.setItem('isTutorial', "0")
        setTutorial()
    }
    return (
        <div className="min-h-screen bg-red-500">
            <button
                className=" flex items-center space-x-2 bg-stone-900 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700"
                onClick={() => cancelTutorial()}
            >
                <p>Finish</p>
            </button>
        </div>
    )
}
