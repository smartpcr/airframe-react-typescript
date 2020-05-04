export interface IMenuEntry {
    id: string;
    parentId?: string;
    exact?: boolean;
    url?: string;
    open?: boolean;
    active?: boolean;
}
