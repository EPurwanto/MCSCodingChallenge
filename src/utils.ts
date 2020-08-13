export function parseOrError(val: string, errors: string[], defaultVal: number = 0): number {
    const parsed = parseInt(val);

    if (isNaN(parsed)) {
        errors.push(`Could not parse [${val}] into an integer`)
        return defaultVal;
    }

    return parsed;
}
