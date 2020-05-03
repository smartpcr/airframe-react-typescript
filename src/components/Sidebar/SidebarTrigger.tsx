import React, { ReactElement } from 'react';
import { NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { withPageConfig } from '../../layouts/withPageConfig';

export interface ISidebarTriggerProps {
    tag: any;
    pageConfig: any;
    children: ReactElement;
}

const SidebarTrigger = (props: ISidebarTriggerProps) => {
    const { tag: Tag, pageConfig, ...otherProps } = props;
    return (
        <Tag
            onClick={ () => { props.pageConfig.toggleSidebar(); return false; } }
            active={ Tag !== 'a' ? !pageConfig.sidebarCollapsed : undefined }
            { ...otherProps }
        >
            { props.children }
        </Tag>
    )
};
SidebarTrigger.propTypes = {
    tag: PropTypes.any,
    children: PropTypes.node,
    pageConfig: PropTypes.object
}
SidebarTrigger.defaultProps = {
    tag: NavLink,
    children: <i className="fa fa-bars fa-fw"></i>
}

const cfgSidebarTrigger = withPageConfig(SidebarTrigger);

export {
    cfgSidebarTrigger as SidebarTrigger
}
