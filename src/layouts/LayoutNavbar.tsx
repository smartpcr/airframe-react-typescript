import React from 'react';
import { ILayoutContentProps } from './LayoutContent';

export interface ILayoutNavbarProps {
    children: ILayoutContentProps[];
    layoutPartName: string;
}

const LayoutNavbar = (props: ILayoutNavbarProps) => {
    const navbar = React.Children.only(props.children);

    return (
        <div className="layout__navbar">
        {
            React.cloneElement(navbar, { fixed: null })
        }
        </div>
    );
};

export {
    LayoutNavbar
};
