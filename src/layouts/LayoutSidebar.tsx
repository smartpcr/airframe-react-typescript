import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ILayoutContentProps } from './LayoutContent';

export interface ILayoutSidebarProps {
    children: ReactElement;
    layoutPartName: string;
}

const LayoutSidebar = (props: ILayoutSidebarProps) => {
    const sidebarClass = classNames("layout__sidebar", {
        "layout__sidebar--slim": true,
        "layout__sidebar--collapsed": true
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
