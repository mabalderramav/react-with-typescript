import React from "react";

type Props = { image: string };
export const RandomFox = ({image}: Props): React.ReactElement => {
    return <img
        width={320}
        height="auto"
        src={image}
        alt="RandomFox"
        className="rounded"
    />
}