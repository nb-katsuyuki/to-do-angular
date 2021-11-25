export interface IColor {
    code: number;
    className: string;
}

export class Color implements IColor {
    constructor(
        public code: number = 0,
        public className: string = "unknown"
    ) { }
}