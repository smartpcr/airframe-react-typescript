import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { withPageConfig } from '../../layouts/withPageConfig';
import { SidebarContent } from './SidebarContent';
import { OuterClick } from '../OuterClick/OuterClick';

export interface ISidebarProps {
    children: ReactElement;
    slim: boolean;
    collapsed: boolean;
    animationDisabled: boolean;
    pageConfig: any;
}

const Sidebar = (props: ISidebarProps) => (
    <React.Fragment>
        { /* Enable OuterClick only in sidebar overlay mode */}
        <OuterClick
            active={
                !props.pageConfig.sidebarCollapsed && (
                    props.pageConfig.screenSize === 'xs' ||
                    props.pageConfig.screenSize === 'sm' ||
                    props.pageConfig.screenSize === 'md'
                )
            }
            onClickOutside={ () => props.pageConfig.toggleSidebar() }
        >
            <SidebarContent { ...props } />
        </OuterClick>
    </React.Fragment>
);

Sidebar.propTypes = {
    children: PropTypes.node,
    slim: PropTypes.bool,
    collapsed: PropTypes.bool,
    animationsDisabled: PropTypes.bool,
    pageConfig: PropTypes.object
};

const cfgSidebar = withPageConfig(Sidebar);

export {
    cfgSidebar as Sidebar
};
