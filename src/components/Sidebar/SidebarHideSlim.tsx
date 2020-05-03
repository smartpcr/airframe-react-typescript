import React, { ReactElement } from 'react';
import classNames from 'classnames';

export interface ISidebarHideSlimProps {
    children: ReactElement;
}

export const SidebarHideSlim = (props: ISidebarHideSlimProps) => {
    return React.Children.map(props.children, (child: ReactElement) =>
        React.cloneElement(child, {
            className: classNames(
                child.props.className,
                'sidebar__hide-slim'
            )  
        })
    );
};

