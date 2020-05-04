import React, { ReactElement } from 'react';
import classNames from 'classnames';

export interface ISidebarShowSlimProps {
    children: ReactElement;
}
export const SidebarShowSlim = (props: ISidebarShowSlimProps) => {
    return React.cloneElement(props.children, {
        className: classNames(
            props.children.props.className,
            'sidebar__show-slim'
        )
    });
};
