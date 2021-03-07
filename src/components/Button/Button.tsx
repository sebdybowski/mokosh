import React from 'react';

interface ButtonTypes {
    text: string,
    onClick: () => void
}

export default function Button({ text, onClick }: ButtonTypes) {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
}
