import { useState } from 'react';

interface Iprops {
    title: string,
    content: string
}

export const Accordion: React.FC<Iprops> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleAccordionClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-400">
            <div
                className="flex justify-between items-center bg-stone-900 px-6 py-3 cursor-pointer select-none text-white"
                onClick={handleAccordionClick}
            >
                <h2 className="text-lg font-medium">{title}</h2>
                <svg
                    className={`h-6 w-6 transition-transform ${isOpen ? 'transform rotate-180' : ''
                        }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
            {isOpen && (
                <div className="bg-gray-100 px-6 py-3 text-gray-700">{content}</div>
            )}
        </div>
    );
}

