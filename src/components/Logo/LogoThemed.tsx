import React from 'react';
import classNames from 'classnames';
import * as logo from "../../assets/images/logo/logo-primary.svg";
import { Consumer as ThemeConsumer } from "../../layouts/theme/ThemeContext";

const logos: {[key: string]: any} = {
    'white': require('../../assets/images/logos/logo-white.svg'),
    'primary': require('../../assets/images/logos/logo-primary.svg'),
    'success': require('../../assets/images/logos/logo-success.svg'),
    'warning': require('../../assets/images/logos/logo-warning.svg'),
    'danger': require('../../assets/images/logos/logo-danger.svg'),
    'info': require('../../assets/images/logos/logo-info.svg'),
    'indigo': require('../../assets/images/logos/logo-indigo.svg'),
    'purple': require('../../assets/images/logos/logo-purple.svg'),
    'pink': require('../../assets/images/logos/logo-pink.svg'),
    'yellow': require('../../assets/images/logos/logo-yellow.svg')
}

const getLogoUrl = (style: string, color: string) => {
    return logos[color];
}

// Check for background
const getLogoUrlBackground = (style: string, color: string) => {
    if (style === 'color') {
        return logos['white'];
    } else {
        return getLogoUrl(style, color);
    }
}

export interface ILogoThemeProps {
    checkBackground?: boolean;
    className?: string;
}

const LogoThemed = (props: ILogoThemeProps) => {
    
    const { checkBackground, className, ...otherProps } = props;

    return <ThemeConsumer>
        {
            ({ style, color }) => (
                <img
                    src={
                        checkBackground ?
                            getLogoUrlBackground(style, color) :
                            getLogoUrl(style, color)
                    }
                    className={classNames('d-block', className)}
                    alt="Airframe Logo"
                    {...otherProps}
                />
            )
        }
    </ThemeConsumer>
}

export { LogoThemed };
