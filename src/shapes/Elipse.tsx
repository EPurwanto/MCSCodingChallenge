import React from "react";
import {parseOrError} from "../utils";

export function ElipseConstructor(tokens: string[], colour: string, key: number): [JSX.Element | undefined, string[]] {
    if (tokens.length <= 4) {
        return [undefined, ["Elipse should be passed 4 parameters: X, Y, RX, RY"]];
    }
    const errors: string[] = [];

    const x = parseOrError(tokens[1], errors, 10);
    const y = parseOrError(tokens[2], errors, 10);
    const rx = parseOrError(tokens[3], errors, 10);
    const ry = parseOrError(tokens[3], errors, 10);

    return [<ellipse cx={x} cy={y} rx={rx} ry={ry} fill={colour} key={key}/>, errors];
}
