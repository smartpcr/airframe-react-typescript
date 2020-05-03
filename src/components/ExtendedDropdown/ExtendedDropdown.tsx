import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { DropdownMenu } from 'reactstrap';

export interface IExtendedDropdownProps {
    className?: string;
    right: boolean;
    children: ReactElement | ReactElement[];
}

export const ExtendedDropdown = (props: IExtendedDropdownProps) => {
    const { className, ...otherProps } = props;

    const classes = classNames(
        className,
        'extended-dropdown'
    );
    return (
        <DropdownMenu className={ classes } { ...otherProps } />
    );
}
