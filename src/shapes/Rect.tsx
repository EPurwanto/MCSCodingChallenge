import React from "react";
import {parseOrError} from "../utils";

export function RectConstructor(tokens: string[], colour: string, key: number): [JSX.Element | undefined, string[]] {
    if (tokens.length <= 4) {
        return [undefined, ["Rect should be passed 4 parameters: X, Y, Width and Height"]];
    }
    const errors: string[] = [];

    const x = parseOrError(tokens[1], errors, 10);
    const y = parseOrError(tokens[2], errors, 10);
    const w = parseOrError(tokens[3], errors, 10);
    const h = parseOrError(tokens[4], errors, 10);

    return [<rect x={x} y={y} width={w} height={h} fill={colour} key={key}/>, errors];
}
