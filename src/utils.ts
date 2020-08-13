import {RectConstructor} from "./shapes/Rect";
import {CircleConstructor} from "./shapes/Circle";
import {PolyConstructor} from "./shapes/Poly";
import {ElipseConstructor} from "./shapes/Elipse";

export function parseOrError(val: string, errors: string[], defaultVal: number = 0): number {
    const parsed = parseInt(val);

    if (isNaN(parsed)) {
        errors.push(`Could not parse [${val}] into an integer`)
        return defaultVal;
    }

    return parsed;
}

const maxHex = 16777215;
export function randomColour(): string {
    const numeric = Math.floor(Math.random() * maxHex);
    return '#' + numeric.toString(16)
}

export function parseShapes(input: string, getColour: (i: number) => string): [JSX.Element[], string[]] {
    const errors: string[] = [];
    const shapes: JSX.Element[] = [];
    let i = 0;

    for (const line of input.split('\n')) {
        const trimmed = line.trim();

        if (!trimmed) {
            continue;
        }

        const tokens = trimmed.split(' ');

        let comp : undefined | JSX.Element;
        let err : string[] = [];

        switch (tokens[0].toLowerCase()) {
            case "r":
                [comp, err] = RectConstructor(tokens, getColour(i), i);
                break;
            case "c":
                [comp, err] = CircleConstructor(tokens, getColour(i), i);
                break;
            case "p":
                [comp, err] = PolyConstructor(tokens, getColour(i), i);
                break;
            case "e":
                [comp, err] = ElipseConstructor(tokens, getColour(i), i);
                break;
            default:
                errors.push(`Could not parse [${line}]: [${tokens[0]}] is not a valid shape`);
        }

        errors.push(...err);
        if (comp)
        {
            shapes.push(comp);
        }
        i++;
    }

    return [shapes, errors];
}
