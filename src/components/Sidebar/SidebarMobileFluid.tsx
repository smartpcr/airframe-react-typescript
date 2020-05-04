import React, { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export interface ISidebarMobileFluidProps {
    className?: string;
    children: ReactNode;
}

const SidebarMobileFluid = (props: ISidebarMobileFluidProps) => {
    const wrapClass = classNames("sidebar__mobile-fluid", props.className);

    return (
        <div className={ wrapClass }>
            { props.children }
        </div>
    );
};

export {
    SidebarMobileFluid
};
