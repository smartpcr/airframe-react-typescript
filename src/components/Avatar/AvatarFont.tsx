import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Avatar } from './Avatar';

import avatarColors from '../../styles/colors.scss';
import { AvatarImage } from './AvatarImage';

export interface IAvatarFontProps {
    children: ReactNode;
    bgColor?: string;
    fgColor?: string;
    bgColorCustom?: string;
    fgColorCustom?: string;
    size: string;
    className?: string;
}

const AvatarFont = (props: IAvatarFontProps) => {
    const {
        children,
        bgColor,
        fgColor,
        bgColorCustom,
        fgColorCustom,
        ...avatarProps
    } = props;
    const parentClass = classNames(
        'avatar-font',
        `avatar-font--${avatarProps.size}`,
        bgColor && avatarColors[`bg-color--${ bgColor }`]
    );
    const childClass = classNames('avatar-font__text',
        fgColor && avatarColors[`fg-color--${ fgColor }`]
    );
    const parentCustomStyle = bgColorCustom ? {
        backgroundColor: bgColorCustom
    } : { };
    const childCustomStyle = fgColorCustom ? {
        color: fgColorCustom
    } : { };
    const child = (
        <span>
            { children }
        </span>
    );

    return (
        <Avatar { ...avatarProps }>
            <div className={ parentClass } style={parentCustomStyle}>
            {
                React.cloneElement(child, {
                    style: childCustomStyle,
                    className: classNames(child.props.className, childClass)
                })
            }
            </div>
        </Avatar>
    );
};
AvatarFont.defaultProps = {
    bgColor: '400',
    fgColor: 'white',
    size: 'md'
};

export { AvatarFont };