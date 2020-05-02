import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ILayoutContentProps } from './LayoutContent';

export interface ILayoutSidebarProps {
    sidebarSlim: boolean;
    sidebarCollapsed: boolean;
    children: ILayoutContentProps[];
    layoutPartName: string;
}

const LayoutSidebar = (props: ILayoutSidebarProps) => {
    const sidebarClass = classNames("layout__sidebar", {
        "layout__sidebar--slim": props.sidebarSlim,
        "layout__sidebar--collapsed": props.sidebarCollapsed
    });

    return (
        <div className={ sidebarClass }>
            { props.children }
        </div>
    );
};

export {
    LayoutSidebar
};
