import { Board } from "./Components/Board";

function App() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <h1>Princess Okoku</h1>
                <div className="flex space-x-2">
                    <button className="px-2 py-2 rounded-full bg-pink-400 hover:bg-pink-500 text-gray-100">Start</button>
                    <button className="px-2 py-2 rounded-full bg-amber-400 hover:bg-amber-500 text-gray-100">Info</button>
                </div>
            </div>
            <Board />
        </>
    );
}

export default App;
