export interface ICategory {
    id: number;
    name: String;
    slug: String;
    color: number;
}

export class Category implements ICategory {
    constructor(
        public id: number = 0,
        public name: String = "unknown",
        public slug: String = "unknown",
        public color: number = 0) { }
}