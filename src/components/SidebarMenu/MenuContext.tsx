import React from 'react';
import { IMenuEntry } from './IMenuEntry';

export interface IMenuContext {
    entries?: any;
    addEntry?(entry: IMenuEntry): void;
    removeEntry?(id: string): void;
    updateEntry?(id: string, stateMod: IMenuEntry): void;
}

const MenuContext = React.createContext<IMenuContext>({});

export { MenuContext };