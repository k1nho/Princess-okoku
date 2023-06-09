export const Welcome: React.FC = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="max-w-3xl w-full mx-6 bg-stone-900 shadow-lg rounded-lg p-8">
                <div className="flex justify-center">
                    <h2 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-300 to-purple-400 mb-4">
                        The Kingdom of Althreisha
                    </h2>
                </div>

                <p className="mb-4 text-white font-semibold text-lg text-center leading-8">
                    Welcome to Princess Okoku, a turn-based card game that takes you on an
                    exciting journey through the magical kingdom of Althreisha! Are you
                    ready to help Princess Kaede in her quest to uncover the truth and
                    solve the mysteries that surround the creatures of this wondrous land?
                </p>
                <p className="mb-4 text-white font-semibold text-lg text-center leading-8">
                    In this game, you will join Princess Kaede and her friends on an
                    adventure through Althreisha, encountering all sorts of fascinating
                    creatures along the way. From dragons to cyberpunk princesses,
                    fairies, and talking cats, the kingdom is filled with wonder and
                    excitement.
                </p>
                <p className="mb-4 text-white font-semibold text-lg text-center leading-8">
                    To begin your adventure, simply choose your deck and start exploring
                    the kingdom. As you progress through the game, you will collect more
                    decks that can be used in battle to explore Althreisha with unique
                    strategies.
                </p>
                <p className="mb-4 text-white font-semibold text-lg text-center leading-8">
                    Remember, this is a turn-based game, which means you will need to
                    strategize and plan your moves carefully in order to succeed. Each
                    card has its own unique abilities and strengths, so make sure to
                    choose wisely.
                </p>
                <p className="mb-4 text-white font-semibold text-lg text-center leading-8">
                    Are you ready to join Princess Kaede on her quest for truth and
                    adventure? Let's get started and see where the journey takes us in the
                    magical kingdom of Althreisha!
                </p>
            </div>
        </div>
    );
};
