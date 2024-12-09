import React from "react";

// Generate a random function between 1 and 123.
const random = () => Math.floor(Math.random() * 123) + 1;

export const RandomFox = (): React.ReactElement => {
    const image: string = `https://randomfox.ca/images/${random()}.jpg`;

    return <img
        width={320}
        height="auto"
        src={image}
        alt="RandomFox"
        className="rounded"
    />
}