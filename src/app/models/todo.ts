export interface ITodo {
    id?: number;
    categoryId?: number;
    title: string;
    body?: string;
    state: number;
}

export class Todo implements ITodo {
    constructor(
        public id: number = 0,
        public categoryId: number = 0,
        public title: string = "",
        public body: string = "",
        public state: number = 0,
    ) { }
}