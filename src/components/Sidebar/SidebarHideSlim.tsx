import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';

export interface ISidebarHideSlimProps {
    children: ReactElement;
}

export const SidebarHideSlim = (props: ISidebarHideSlimProps) => {
    return React.cloneElement(props.children, {
        className: classNames(
            props.children.props.className,
            'sidebar__hide-slim'
        )  
    });
};

