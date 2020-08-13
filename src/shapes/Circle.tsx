import React from "react";
import {parseOrError} from "../utils";

export function CircleConstructor(tokens: string[], colour: string, key: number): [JSX.Element | undefined, string[]] {
    if (tokens.length <= 3) {
        return [undefined, ["Circle should be passed 3 parameters: X, Y, Radius"]];
    }
    const errors: string[] = [];

    const x = parseOrError(tokens[1], errors, 10);
    const y = parseOrError(tokens[2], errors, 10);
    const r = parseOrError(tokens[3], errors, 10);

    return [<circle cx={x} cy={y} r={r} fill={colour} key={key}/>, errors];
}
