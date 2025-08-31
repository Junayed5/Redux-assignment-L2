export interface IBook {
    id:string,
    title: string,
    author: string,
    genre: string,
    isbn: string,
    copies: string,
    available?: boolean
}