import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export interface IExtendedDropdownSectionProps {
    children: ReactElement | ReactElement[];
    list?: boolean;
    className?: string;
    tag?: any;
    to?: string;
}

const ExtendedDropdownSection = (props: IExtendedDropdownSectionProps) => {
    const { children, list, className, tag, ...otherProps } = props;
    const sectionClass = classNames(
        "extended-dropdown__section", className, {
            "extended-dropdown__section--list": list
        }
    );
    const Tag = tag;

    return (
        <Tag className={ sectionClass } { ...otherProps }>
            { children }
        </Tag>
    );
};

export { ExtendedDropdownSection };