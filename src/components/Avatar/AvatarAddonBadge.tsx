import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Badge } from 'reactstrap';

export interface IAvatarAddonBadgeProps {
    children: ReactNode;
    className?: string;
    addOnId: string;
}

const AvatarAddonBadge = (props: IAvatarAddonBadgeProps) => {
    const { children, ...badgeProps } = props;

    return (
        <Badge {...badgeProps}>
            { children }
        </Badge>
    );
};

AvatarAddonBadge.addOnId = "avatar--badge";

export { AvatarAddonBadge };