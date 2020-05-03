import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export interface ISidebarSectionProps {
    children: ReactElement;
    fluid?: boolean;
    cover?: boolean;
    className?: string;
}


const SidebarSection = (props: ISidebarSectionProps) => {
    const sectionClass = classNames("sidebar__section", {
        'sidebar__section--fluid': props.fluid,
        'sidebar__section--cover': props.cover
    }, props.className);

    return (
        <div className={ sectionClass }>
            { props.children }
        </div>
    );
};

export {
    SidebarSection
};
