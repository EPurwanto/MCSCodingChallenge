import {parseOrError} from "../utils";
import React from "react";

interface Point {
    x: number,
    y: number,
}

function parseCoord(token: string): Point | string[] {
    const errors: string[] = [];

    const coord = token.trim().split(',');
    if (coord.length !== 2) {
        errors.push(`Could not parse [${token}] into a coordinate: coordinates should be 2 numbers separated by a comma with no space in between`)
        return errors;
    }
    const x = parseOrError(coord[0], errors);
    const y = parseOrError(coord[1], errors);

    if (errors.length > 0) {
        return errors;
    }

    return {x: x, y: y};
}

export function PolyConstructor(tokens: string[], key: number): [JSX.Element | undefined, string[]] {
    if (tokens.length <= 3) {
        return [undefined, ["Polygon should be passed at least 3 coordinates"]];
    }
    const errors: string[] = [];
    const points: Point[] = [];

    for (const token of tokens.slice(1)) {
        const val = parseCoord(token);

        if (Array.isArray(val)) {
            errors.push(...val);
        } else {
            points.push(val);
        }
    }

    return [<polygon points={`${points.map(p => `${p.x},${p.y}`).join(' ')}`} fill="#12ab56" key={key}/>, errors];
}
