import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { ILayoutProps } from './LayoutContent';

export interface ILayoutSidebarProps {
    children: ReactNode;
    sidebarSlim?: boolean;
    sidebarCollapsed?: boolean;
    layoutPartName: string;
}

const LayoutSidebar = (props: ILayoutSidebarProps) => {
    const sidebarClass = classNames("layout__sidebar", {
        "layout__sidebar--slim": props.sidebarSlim,
        "layout__sidebar--collapsed": props.sidebarCollapsed
    });

    return (
        <div className={sidebarClass}>
            {props.children}
        </div>
    );
};

export {
    LayoutSidebar
};
