import React from 'react';
import classNames from 'classnames';
import { FooterText } from './FooterText';

export interface IFooterAuthProps {
    className: string;
}

const FooterAuth = (props: IFooterAuthProps) => (
    <p className={ classNames(props.className, 'small') }>
        <FooterText />
    </p>
);

export { FooterAuth };
