import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import * as PropTypes from "prop-types";
import { DropdownContext } from './DropdownContext';

type IExtendedDropdownLinkProps = PropTypes.InferProps<LinkProps>;

const ExtendedDropdownLink = (props: IExtendedDropdownLinkProps) => {
    const { children, to, ...otherProps } = props;

    return (
        <DropdownContext.Consumer>
        {
            ({ toggle }) => (
                <Link to={to} { ...otherProps } onClick={ () => { toggle && toggle(); } }>
                    { children }
                </Link>
            )
        }
        </DropdownContext.Consumer>
    );
};

export { ExtendedDropdownLink };
