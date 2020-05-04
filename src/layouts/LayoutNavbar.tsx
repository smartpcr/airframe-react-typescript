import React, { ReactElement } from 'react';
import { ILayout, ILayoutProps } from './LayoutContent';

const LayoutNavbar = (props: ILayoutProps) => {
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
