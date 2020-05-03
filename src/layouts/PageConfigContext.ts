import React from 'react';
import { ILayoutState } from './Layout';

export interface IPageConfigContext {
    style?: string;
    color?: string;
    sidebarHidden?: boolean;
    navbarHidden?: boolean;
    sidebarSlim?: boolean;
    toggleSidebar?(): void;
    setElementsVisibility?(elements: any): void;
    changeMeta?(metaData: ILayoutState): void;
}

const PageConfigContext = React.createContext<IPageConfigContext>({});

export {
    PageConfigContext
};
