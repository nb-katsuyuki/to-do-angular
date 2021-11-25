export interface IState {
    code: number;
    name: string;
}

export class State implements IState {
    constructor(
        public code: number = 0,
        public name: string = "unknown"
    ) { }
}