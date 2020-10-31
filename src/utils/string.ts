export function setClass(line: string | undefined, defaultClass: string) {
    if (checkString(line))
        defaultClass += ` ${line}`;
    return defaultClass;
}
export function checkString(line: string | undefined) {
    return typeof line == 'string' && line.length;
}

export function joinStringArray(lines: string[]) {
    return lines.join(" ");
}

export function getEnumName(value: number, structure: any): string {
    try {
        return structure[value].toString();
    } catch (error) {
        return ""
    }
}

export function checkStringLine(line: string | undefined) {
    return checkString(line) ? line : '';
}