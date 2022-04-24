export enum TodoState { Todo, Done }

export interface TodoItem {
    state: TodoState;
    title: string;
    detail: string;
}