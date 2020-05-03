import React, { ReactElement } from 'react';

export interface ISidebarCloseProps {
    children: ReactElement;
}

const SidebarClose = (props: ISidebarCloseProps) => (
    <div className="sidebar__close">
        { props.children }
    </div>
);

export { SidebarClose };