import React, { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

export interface IAvatarProps {
    size: string;
    children: ReactElement;
    addOns?: ReactNode;
    style?: any;
    className?: string;
}

const Avatar = (props: IAvatarProps) => {
    const avatarClass = classNames(
        'avatar',
        `avatar--${ props.size }`,
        props.className
    );
    const addOnsdArr = React.Children.toArray(props.addOns) as ReactElement[];
    const badge = _.find(addOnsdArr, (avatarAddOn: ReactElement) =>
        avatarAddOn.props.addOnId === "avatar--badge");
    const icons = _.filter(addOnsdArr, (avatarAddOn) =>
        avatarAddOn.props.addOnId === "avatar--icon");
    const isNested = _.reduce(addOnsdArr, (acc, avatarAddOn) =>
        acc || !!avatarAddOn.props.small, false);

    return (
        <div className={ avatarClass } style={ props.style }>
            {
                badge && (
                    <div className="avatar__badge">
                        { badge }
                    </div>
                )
            }
            {
                !_.isEmpty(icons) && (() => {
                    switch(icons.length) {
                        case 1:
                            return (
                                <div className="avatar__icon">
                                    { _.first(icons) }
                                </div>
                            )
                        default:
                            return (
                                <div
                                    className={
                                        classNames({
                                            'avatar__icon--nested': isNested,
                                        }, 'avatar__icon', 'avatar__icon--stack')
                                    }
                                >
                                    { icons }
                                </div>
                            )
                    }
                })() 
            }
            <div className='avatar__content'>
                { props.children }
            </div>
        </div>
    );
};
Avatar.propTypes = {
    size: PropTypes.string,
    children: PropTypes.node.isRequired,
    addOns: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string
};
Avatar.defaultProps = {
    size: "md",
    style: {}
};

export { Avatar };