import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export interface IIconWithBadgeProps {
    badge: ReactElement;
    children: ReactElement;
    className?: string;
}

const IconWithBadge = (props: IIconWithBadgeProps) => {
    const { badge, children, className } = props;
    const adjustedBadge = React.cloneElement(badge, {
        className: classNames(
            badge.props.className,
            'icon-with-badge__badge'
        )
    });
    const wrapClass = classNames(className, 'icon-with-badge');
    return (
        <div className={ wrapClass }>
            { children }
            { adjustedBadge }
        </div>
    );
};

export { IconWithBadge };
