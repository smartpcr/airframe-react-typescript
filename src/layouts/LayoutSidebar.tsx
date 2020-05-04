import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { ILayoutProps } from './LayoutContent';

const LayoutSidebar = (props: ILayoutProps) => {
    const sidebarClass = classNames("layout__sidebar", {
        "layout__sidebar--slim": true,
        "layout__sidebar--collapsed": true
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
